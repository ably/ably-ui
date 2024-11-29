#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Install packages, making sure they are up to date"
pnpm i --frozen-lockfile

echo "Build library"
NODE_ENV=production pnpm build

echo "Publish the npm package to the registry"
pnpm publish --no-git-tag-version --new-version $VERSION
