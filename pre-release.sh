#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

if [ $# -lt 2 ]; then
  echo $0: "Error: Please provide a valid development version, ie. ./release.sh 1.2.1 1"
  exit 1
fi

VERSION=$1-dev.$2
RUBY_VERSION=$1.dev.$2
TAG=v$1-dev.$2

echo "Building assets"
NODE_ENV=production node scripts/webpack-build.js

echo "Tagging commit with $TAG"
git tag -a $TAG -m "$TAG"

echo "Updating version.rb file"
echo -e "module AblyUi\n  VERSION = '$RUBY_VERSION'\nend" > ./lib/ably_ui/version.rb

echo "Building the gem"
gem build ably-ui.gemspec

echo "Pushing the gem to the registry"
gem push --key github \
    --host https://rubygems.pkg.github.com/ably \
    ably-ui-$RUBY_VERSION.gem

echo "Publishing the npm package to the registry"
yarn publish --no-git-tag-version --new-version $VERSION

echo "Commiting version bump"
git add package.json lib/ably_ui/version.rb && git commit -m "Bump version to $TAG"

echo "Remove local gem artifact"
rm ably-ui-$VERSION.gem
