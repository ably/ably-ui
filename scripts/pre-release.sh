#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

echo "> Fetching remote for up to date commit history"
git fetch

BRANCH=$(git branch --show-current)
COMMITS_AHEAD=$(git rev-list $BRANCH...origin/$BRANCH --count)

if [ $COMMITS_AHEAD -gt 0 ]; then
  echo $0: "Error: branch origin/${BRANCH} is ahead of your local branch ${BRANCH}"
  exit 1
fi

if [[ `git status --porcelain --untracked-files=no` ]]; then
  echo $0: "Error: you have uncommited changes. A package is created from the filesystem, not git state so it's important to not have uncommited changes."
  exit 1
fi

echo "> Save short SHA for package name"
PACKAGE_SUFFIX=$(git rev-parse --short HEAD)
echo "> SHA is ${PACKAGE_SUFFIX}"

echo "> Read the current semver from package.json, ignoring pre-release versions"
ABLY_UI_VERSION=$(node -e "const p = require('./package.json'); console.log(p.version.split('-dev')[0]);")

VERSION=$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX
TAG=v$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX

echo "> Creating env vars, run below in bash in case you need to re-run the script:"
echo "export VERSION=$VERSION"
echo "export TAG=$TAG"
echo "export ABLY_UI_VERSION=$ABLY_UI_VERSION"
echo "export PACKAGE_SUFFIX=$PACKAGE_SUFFIX"

if git rev-parse "${TAG}" >/dev/null 2>&1; then
  echo $0: "Error: ${TAG} already exists"
  exit 1
fi

echo "> Install packages, making sure they are up to date"
echo "> yarn (npm)"
yarn --frozen-lockfile

echo "> Build library"
NODE_ENV=production yarn build

echo "> Publish the npm package to the registry"
yarn publish --no-git-tag-version --new-version $VERSION --tag dev

echo "Update Pre Release versions"
./scripts/update-pre-release-versions.sh $ABLY_UI_VERSION $PACKAGE_SUFFIX
