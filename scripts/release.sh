#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Install packages, making sure they are up to date"
yarn --frozen-lockfile
bundle config set --local frozen true
bundle
bundle config set --local frozen false

echo "Build library"
NODE_ENV=production node scripts/build.js

echo "Update version.rb file"
echo -e "module AblyUi\n  VERSION = '$VERSION'\nend" > ./lib/ably_ui/version.rb

echo "Build the gem"
gem build ably-ui.gemspec

echo "Setting up gem credentials..."
set +x
mkdir -p ~/.gem

cat << EOF > ~/.gem/credentials
---
:rubygems_api_key: ${RUBYGEMS_API_KEY}
EOF

chmod 0600 ~/.gem/credentials
set -x

echo "Push the gem to the registry"
gem push ably-ui-$VERSION.gem

echo "Update Gemfile.lock"
bundle config unset deployment
bundle

echo "Remove local gem artifact"
rm ably-ui-$VERSION.gem

echo "Publish the npm package to the registry"
yarn publish --no-git-tag-version --new-version $VERSION
