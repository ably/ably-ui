#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Update package version"
yarn version --new-version $VERSION --no-git-tag-version

echo "Update version.rb"
# Using -i.bak is a cross-platform way of using sed
# https://stackoverflow.com/a/22084103
sed -i.bak "s/  VERSION = '.*'/  VERSION = '${VERSION}'/" lib/ably_ui/version.rb
rm lib/ably_ui/version.rb.bak

echo "Update preview app version"
cd preview

echo "Amend Gemfile to use the right version"
# Using -i.bak is a cross-platform way of using sed
# https://stackoverflow.com/a/22084103
sed -i.bak "s/gem 'ably-ui', '.*', require/gem 'ably-ui', '${VERSION}', require/" Gemfile
rm Gemfile.bak

echo "Upgrade ably-ui npm package in preview app"
yarn upgrade @ably/ui@$VERSION

echo "Upgrade ably-ui ruby gem in preview app"
bundle lock  # don't change contents gem dir as it might be using local paths

echo "Commit preview app update to $VERSION"
cd ..
git add preview/package.json preview/yarn.lock preview/Gemfile preview/Gemfile.lock
git add lib/ably_ui/version.rb Gemfile.lock package.json
git commit -m "Update package version & preview app to ably-ui $VERSION"
