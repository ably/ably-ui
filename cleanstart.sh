#!/bin/bash

# A script to ensure webpack assets are up-to-date
node scripts/webpack-build.js && foreman start
