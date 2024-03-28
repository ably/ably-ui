#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail
env

VERSION=$1

echo "Update package version"
yarn version --new-version $VERSION --no-git-tag-version

echo "Commit app update to $VERSION"
git add package.json yarn.lock
git commit -m "Update package version to @ably/ui $VERSION"
