#!/bin/bash

# A script to ensure webpack assets are up-to-date
set -eo pipefail

UPDATE="$1"

if ! which foreman &> /dev/null; then
  echo "foreman executable could not be found."
  echo "Install it with 'gem install foreman'."
  echo
  echo "See https://github.com/ably/ably-ui#using-the-development-build-of-ably-ui-in-the-preview-app for details"
  exit
fi

clear;

if [[ $UPDATE == "--update-deps" ]]; then
  # Ensure recently added components are up-to-date
  echo "Update yarn for new modules"
  yarn --frozen-lockfile
fi

echo "Creating webpack build assets"
node scripts/build.js

echo "Running webpack and rails server with foreman"
foreman start
