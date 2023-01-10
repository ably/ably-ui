#!/bin/bash

ABLY_UI_VERSION="${1}"
PACKAGE_SUFFIX="${2}"

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

if [ -z $ABLY_UI_VERSION ] || [ -z $PACKAGE_SUFFIX ]; then
	echo $0: "Error: Missing Ably UI Version OR Package Suffix"
	echo $0: "Usage: update-pre-release-versions.sh ABLY_UI_VERSION PACKAGE_SUFFIX"
  exit 1
fi

# Note the . and - before "dev" - this is due to the differences between gems and npm in what they consider a pre-release version
VERSION=$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX
RUBY_VERSION=$ABLY_UI_VERSION.dev.$PACKAGE_SUFFIX
TAG=v$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX

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
git tag --annotate $TAG --message "$TAG" --force

echo "> Push to repo"
git push origin HEAD --force-with-lease
