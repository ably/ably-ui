#!/bin/bash

# A script to ensure webpack assets are up-to-date
set -euo pipefail

# A script to ensure webpack assets are up-to-date
if ! which foreman &> /dev/null; then
  echo "foreman executable could not be found."
  echo "Install it with 'gem install foreman'."
  echo
  echo "See https://github.com/ably/ably-ui#using-the-development-build-of-ably-ui-in-the-preview-app for details"
  exit
fi

# Ensure updated webpack assets before foreman
clear;
node scripts/build.js && foreman start
