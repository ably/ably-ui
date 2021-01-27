#!/bin/node

const webpack = require("webpack");

const config =
  process.env.NODE_ENV === "production"
    ? require("../webpack.prod")
    : require("../webpack.dev");
const setupModules = require("./setup-modules");

const compiler = webpack(config);

compiler.watch({}, (err, stats) => {
  if (err) {
    console.error(err.stack || err);

    if (err.details) {
      console.error(err.details);
    }

    return;
  }

  console.log(
    stats.toString({
      preset: "minimal",
      chunks: false,
      colors: true,
    })
  );

  setupModules();
});
