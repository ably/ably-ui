#!/bin/bash

set -eou pipefail

if [[ -z $REGISTRY_TOKEN ]]; then
  echo "REGISTRY_TOKEN are not set, cannot trigger github actions"
  exit 1
fi

echo "Triggering update action on ably/website ..."
WEBSITE_RESULT=$(curl \
-X POST \
-H "Accept: application/vnd.github+json" \
-H "Authorization: token ${REGISTRY_TOKEN}" \
https://api.github.com/repos/ably/website/actions/workflows/update-ably-ui.yml/dispatches \
-d '{"ref":"main"}')

if [ -z "$WEBSITE_RESULT" ]; then
  echo "Workflow for website triggered"
else
  echo "Failed to trigger workflow:"
  echo $WEBSITE_RESULT
fi

echo ""

echo "Triggering update action on ably/voltaire ..."
VOLTAIRE_RESULT=$(curl \
-X POST \
-H "Accept: application/vnd.github+json" \
-H "Authorization: token ${REGISTRY_TOKEN}" \
https://api.github.com/repos/ably/voltaire/actions/workflows/update-ably-ui.yml/dispatches \
-d '{"ref":"main"}')

if [ -z "$VOLTAIRE_RESULT" ]; then
  echo "Workflow for voltaire triggered"
else
  echo "Failed to trigger workflow:"
  echo $VOLTAIRE_RESULT
fi
