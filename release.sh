#!/bin/bash
set -e

if [ $# -ne 1 ]; then
  echo $0: "Error: Please provide a valid semver version, ie. ./release.sh 1.2.1"
  exit 1
fi

if [[ "$BRANCH" != "main" ]]; then
  echo $0: "Error: Versions can only be released from the main branch"
  exit 1
fi

COMMITS_AHEAD=$(git rev-list main...origin/main --count)

if [ $COMMITS_AHEAD -gt 0 ]; then
  echo $0: "Error: branch origin/main is ahead of your local main"
  exit 1
fi

if [[ `git status --porcelain --untracked-files=no` ]]; then
  echo $0: "Error: you have uncommited changes. A package is created from the filesystem, not git state so it's important to not have uncommited changes."
fi

VERSION=$1
TAG=v$1

echo "Tagging commit with $TAG"
git tag -a $TAG -m "$TAG"

echo "Updating version.rb file"
echo -e "module AblyUi\n  VERSION = '$1'\nend" > ./lib/ably_ui/version.rb

echo "Building the gem"
gem build ably-ui.gemspec

echo "Pushing the gem to the registry"
gem push --key github \
    --host https://rubygems.pkg.github.com/ably \
    ably-ui-$1.gem

echo "Publishing the npm package to the registry"
yarn publish --no-git-tag-version --new-version $1

echo "Commiting version bump"
git add package.json lib/ably_ui/version.rb && git commit -m "Bump version to $TAG"

echo "Pushing tag to origin"
git push origin $TAG
