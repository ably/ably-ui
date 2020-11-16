#!/bin/bash

# trap TERM and change to QUIT
trap 'echo Stopping Rails process $PID; kill -SIGINT $PID' TERM

set -eou

# Run the Rails preview server
cd ./preview/
./bin/rails server -p 5000 &

# capture PID and wait
PID=$!
wait
