#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

if [[ `git status --porcelain --untracked-files=no` ]]; then
  echo $0: "Error: you have uncommited changes. A package is created from the filesystem, not git state so it's important to not have uncommited changes."
  exit 1
fi

echo "Save short SHA for package name"
PACKAGE_SUFFIX=$(git rev-parse --short HEAD)
echo "SHA is ${PACKAGE_SUFFIX}"

echo "Read the current version from package.json"
ABLY_UI_VERSION=$(node -e "const p = require('./package.json'); console.log(p.dependencies['@ably/ably-ui'])")

# Note the . and - before "dev" - this is due to the differences between gems and npm in what they consider a pre-release version
VERSION=$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX
RUBY_VERSION=$ABLY_UI_VERSION.dev.$PACKAGE_SUFFIX
TAG=v$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX

echo "Install packages, making sure they are up to date"
yarn --frozen-lockfile
bundle --frozen

echo "Build library"
NODE_ENV=production node scripts/webpack-build.js

echo "Update version.rb file"
echo -e "module AblyUi\n  VERSION = '$RUBY_VERSION'\nend" > ./lib/ably_ui/version.rb

echo "Build the gem"
gem build ably-ui.gemspec

echo "Push the gem to the registry"
gem push --key github \
    --host https://rubygems.pkg.github.com/ably \
    ably-ui-$RUBY_VERSION.gem

echo "Publish the npm package to the registry"
yarn publish --no-git-tag-version --new-version $VERSION

echo "Update preview app version"
cd preview

echo "Read the current version from package.json"
ABLY_UI_OLD_VERSION=$(node -e "const p = require('./package.json'); console.log(p.dependencies['@ably/ably-ui'])")

echo "Update Gemfile"
sed -i "s/gem 'ably-ui', '${ABLY_UI_OLD_VERSION}'/gem 'ably-ui', '${RUBY_VERSION}'/" Gemfile

echo "Update ably-ui npm package in preview app"
yarn upgrade @ably/ably-ui@$VERSION

echo "Update Gemfile.lock"
bundle lock  # don't change contents gem dir as it might be using local paths

echo "Commit version publish and preview app update to $TAG"
cd ..
git add package.json lib/ably_ui/version.rb
git add preview/package.json preview/yarn.lock preview/Gemfile preview/Gemfile.lock
git commit -m "Publish $TAG and update preview app"

echo "Tag commit with $TAG"
git tag -a $TAG -m "$TAG"

echo "Push to repo"
git push origin HEAD
