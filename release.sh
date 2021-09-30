#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1
TAG=v$1

echo "Check out main"
git checkout main

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
:github: Bearer ${GITHUB_REGISTRY_TOKEN}
EOF

chmod 0600 ~/.gem/credentials
set -x

echo "Push the gem to the registry"
gem push --key github \
    --host https://rubygems.pkg.github.com/ably \
    ably-ui-$VERSION.gem

echo "Update Gemfile.lock"
bundle config unset deployment
bundle

echo "Remove local gem artifact"
rm ably-ui-$VERSION.gem

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
