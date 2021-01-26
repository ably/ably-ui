#! /usr/bin/env node

// Used by the compareComponents command

const Blink = require("blink-diff");
const argv = require("yargs").argv;

const diff = new Blink({
  imageAPath: argv.pathA,
  imageBPath: argv.pathB,
  imageOutputPath: argv.target,
  threshold: 0.05,
});

diff.run((error, result) => {
  // We read stdout/stderr - this script is executed interactively by cypress
  if (error) {
    console.error(error);
  } else {
    console.log(diff.hasPassed(result.code) ? "Yay" : "Nay");
  }
});
