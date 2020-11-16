#!/bin/bash

# trap TERM and change to QUIT
trap 'echo Stopping webpack-dev-server process $PID; kill -SIGINT $PID' TERM

set -eou

# Run the webpack-dev-server in the preview app
cd ./preview/
./bin/webpack-dev-server &

# capture PID and wait
PID=$!
wait
