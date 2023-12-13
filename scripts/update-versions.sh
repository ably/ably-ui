#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Update package version"
yarn version --new-version $VERSION --no-git-tag-version

echo "Update preview app version"
cd preview

echo "Upgrade ably-ui npm package in preview app"
yarn upgrade @ably/ui@$VERSION

echo "Commit preview app update to $VERSION"
cd ..
git add preview/package.json preview/yarn.lock
git add package.json yarn.lock
git commit -m "Update package version & preview app to @ably/ui $VERSION"
