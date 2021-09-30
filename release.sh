#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
echo $1
env

VERSION=$1
TAG=v$1

echo "==============================="
echo "VERSION---"
echo $VERSION
echo "TAG---"
echo $TAG
echo "$RUBYGEMS_API_KEY=-----------"
echo $RUBYGEMS_API_KEY
echo "==============================="

if [ $# -ne 1 ]; then
  echo $0: "Error: Please provide a valid semver version, ie. ./release.sh 1.2.1"
  exit 1
fi

BRANCH=$(git branch --show-current)

if [[ $BRANCH != "main" ]]; then
  echo $0: "Error: Releases can only be made from the main branch"
  exit 1
fi

COMMITS_AHEAD=$(git rev-list main...origin/main --count)

if [ $COMMITS_AHEAD -gt 0 ]; then
  echo $0: "Error: branch origin/main is ahead of your local main"
  exit 1
fi

if [[ `git status --porcelain --untracked-files=no` ]]; then
  echo $0: "Error: you have uncommited changes. A package is created from the filesystem, not git state so it's important to not have uncommited changes."
  exit 1
fi

if git rev-parse "${TAG}" >/dev/null 2>&1; then
  echo $0: "Error: ${TAG} already exists"
  exit 1
fi

echo "Install packages, making sure they are up to date"
yarn --frozen-lockfile
bundle config set --local frozen true
bundle
bundle config set --local frozen false

echo "Build library"
NODE_ENV=production node scripts/build.js

echo "Update version.rb file"
echo -e "module AblyUi\n  VERSION = '${VERSION}'\nend" > ./lib/ably_ui/version.rb

echo "Build the gem"
gem build ably-ui.gemspec

echo "Setting up gem credentials..."
set +x
mkdir -p ~/.gem

cat << EOF > ~/.gem/credentials
---
:github: Bearer ${GITHUB_TOKEN}
EOF

chmod 0600 ~/.gem/credentials
set -x

echo "Push the gem to the registry"
gem push --key github \
    --host https://rubygems.pkg.github.com/ably \
    ably-ui-${VERSION}.gem

echo "Update Gemfile.lock"
bundle

echo "Remove local gem artifact"
rm ably-ui-${VERSION}.gem

echo "Publish the npm package to the registry"
yarn publish --no-git-tag-version --new-version $VERSION

echo "Update preview app version"
cd preview

echo "Update Gemfile"
sed -i.bak "s/gem 'ably-ui', '.*', require/gem 'ably-ui', '${VERSION}', require/" Gemfile
rm Gemfile.bak

echo "Update ably-ui npm package in preview app"
yarn upgrade @ably/ably-ui@$VERSION

echo "Update Gemfile.lock"
bundle lock  # don't change contents gem dir as it might be using local paths

echo "Commit version publish and preview app update to $TAG"
cd ..
git add package.json lib/ably_ui/version.rb Gemfile.lock
git add preview/package.json preview/yarn.lock preview/Gemfile preview/Gemfile.lock
git commit -m "Publish $TAG and update preview app"

echo "Tag commit with $TAG"
git tag -a $TAG -m "$TAG"

echo "Push tag to origin"
git push origin $TAG

echo "Push main to origin"
git push origin main
