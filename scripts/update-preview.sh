#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Update preview app version"
cd preview

echo "Amend Gemfile to use the right version"
sed -i.bak "s/gem 'ably-ui', '.*', require/gem 'ably-ui', '${VERSION}', require/" Gemfile
rm Gemfile.bak

echo "Upgrade ably-ui npm package in preview app"
yarn upgrade @ably/ui@$VERSION

echo "Upgrade ably-ui ruby gem in preview app"
bundle lock  # don't change contents gem dir as it might be using local paths

echo "Commit preview app update to $VERSION"
cd ..
git add preview/package.json preview/yarn.lock preview/Gemfile preview/Gemfile.lock
git commit -m "Update preview app to ably-ui $VERSION"
