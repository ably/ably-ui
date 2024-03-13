#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Install packages, making sure they are up to date"
yarn --frozen-lockfile

echo "Build library"
NODE_ENV=production node scripts/build.js

echo "Publish the npm package to the registry"
yarn publish --no-git-tag-version --new-version $VERSION
