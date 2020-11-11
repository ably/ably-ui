#!/bin/bash

# See https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

echo -e "📦 Transpiling assets with webpack"
yarn webpack
echo -e ""

echo "👔 Syncing ruby components folder with generated assets"
node scripts/sync-view-component-assets
