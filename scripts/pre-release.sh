#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

echo "> Fetching remote for up to date commit history"
git fetch

BRANCH=$(git branch --show-current)
COMMITS_AHEAD=$(git rev-list $BRANCH...origin/$BRANCH --count)

if [ $COMMITS_AHEAD -gt 0 ]; then
  echo $0: "Error: branch origin/${BRANCH} is ahead of your local branch ${BRANCH}"
  exit 1
fi

if [[ `git status --porcelain --untracked-files=no` ]]; then
  echo $0: "Error: you have uncommited changes. A package is created from the filesystem, not git state so it's important to not have uncommited changes."
  exit 1
fi

echo "> Save short SHA for package name"
PACKAGE_SUFFIX=$(git rev-parse --short HEAD)
echo "> SHA is ${PACKAGE_SUFFIX}"

echo "> Read the current semver from package.json, ignoring pre-release versions"
ABLY_UI_VERSION=$(node -e "const p = require('./package.json'); console.log(p.version.split('-dev')[0]);")

# Note the . and - before "dev" - this is due to the differences between gems and npm in what they consider a pre-release version
VERSION=$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX
RUBY_VERSION=$ABLY_UI_VERSION.dev.$PACKAGE_SUFFIX
TAG=v$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX

echo "> Creating env vars, run below in bash in case you need to re-run the script:"
echo "export VERSION=$VERSION"
echo "export RUBY_VERSION=$RUBY_VERSION"
echo "export TAG=$TAG"
echo "export ABLY_UI_VERSION=$ABLY_UI_VERSION"
echo "export PACKAGE_SUFFIX=$PACKAGE_SUFFIX"

if git rev-parse "${TAG}" >/dev/null 2>&1; then
  echo $0: "Error: ${TAG} already exists"
  exit 1
fi

echo "> Install packages, making sure they are up to date"
echo "> yarn (npm)"
yarn --frozen-lockfile

echo "> gems"
bundle config set --local frozen true
bundle
bundle config set --local frozen false

echo "> Build library"
NODE_ENV=production node scripts/build.js

echo "> Update version.rb file"
echo -e "module AblyUi\n  VERSION = '$RUBY_VERSION'\nend" > ./lib/ably_ui/version.rb

echo "> Build the gem"
gem build ably-ui.gemspec

echo "> Push the gem to the registry ($VERSION)"
gem push ably-ui-$RUBY_VERSION.gem

echo "> Remove local gem artifact ($RUBY_VERSION)"
rm ably-ui-$RUBY_VERSION.gem

echo "> Publish the npm package to the registry"
yarn publish --no-git-tag-version --new-version $VERSION

echo "Waiting to make sure packages are available in registries ..."
tries=0
while [ $tries -lt 20 ]
do
  tries=$(( $tries + 1 ))
  sleep 15
  versions=$( gem search ably-ui --exact --prerelease --remote)
  count=$(echo ${versions} | grep --count ${RUBY_VERSION} || true)
  # Break if we have a match
  if [ $count -eq 1 ]; then
    # Work around bundler not finding gems immediately after being published
    gem install ably-ui --version ${RUBY_VERSION}
    break
  fi
  echo -n $tries
done
echo

if [ $tries -eq 20 ]; then
  echo "! Failed to find version ${RUBY_VERSION} in list of releases on Rubygems"
  exit 1
fi

echo "Update Pre Release versions"
./scripts/update-pre-release-versions.sh $ABLY_UI_VERSION $PACKAGE_SUFFIX