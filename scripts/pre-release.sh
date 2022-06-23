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

echo "Waiting to make sure packages are available in registries ;("
sleep 180

echo "> Update Gemfile.lock"
bundle

echo "> Update preview app version"
cd preview

echo "> Update Gemfile"
# Using -i.bak is a cross-platform way of using sed
# https://stackoverflow.com/a/22084103
sed -i.bak "s/gem 'ably-ui', '.*', require/gem 'ably-ui', '${RUBY_VERSION}', require/" Gemfile
rm Gemfile.bak

echo "> Update ably-ui npm package in preview app"
yarn upgrade @ably/ui@$VERSION

echo "> Update Gemfile.lock"
bundle lock  # don't change contents gem dir as it might be using local paths

echo "> Commit version publish and preview app update to $TAG"
cd ..
git add package.json lib/ably_ui/version.rb Gemfile.lock
git add preview/package.json preview/yarn.lock preview/Gemfile preview/Gemfile.lock
git commit -m "Publish $TAG and update preview app"

echo "> Tag commit with $TAG"
git tag -a $TAG -m "$TAG"

echo "> Push to repo"
git push origin HEAD
