#!/bin/bash

ABLY_UI_VERSION="${1}"
PACKAGE_SUFFIX="${2}"

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

if [ -z $ABLY_UI_VERSION ] || [ -z $PACKAGE_SUFFIX ]; then
	echo $0: "Error: Missing Ably UI Version OR Package Suffix"
	echo $0: "Usage: update-pre-release-versions.sh ABLY_UI_VERSION PACKAGE_SUFFIX"
  exit 1
fi

# Note the . and - before "dev" - this is due to the differences between gems and npm in what they consider a pre-release version
VERSION=$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX
TAG=v$ABLY_UI_VERSION-dev.$PACKAGE_SUFFIX

echo "> Commit version and publish update to $TAG"
git add package.json yarn.lock
git commit -m "Publish $TAG"

echo "> Tag commit with $TAG"
git tag --annotate $TAG --message "$TAG" --force

echo "> Push to repo"
git push origin HEAD --force-with-lease
