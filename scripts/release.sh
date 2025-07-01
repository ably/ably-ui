#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Install packages, making sure they are up to date"
pnpm install --frozen-lockfile

echo "Build library"
NODE_ENV=production pnpm build

echo "Update package.json version"
pnpm version $VERSION --no-git-checks --no-git-tag-version

echo "Publish the npm package to the registry"
pnpm publish --no-git-checks
