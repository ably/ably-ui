const webpack = require("webpack");

const config = require("../webpack.config");
const setupModules = require("./setup-modules");

const compiler = webpack(config);

compiler.run((err, stats) => {
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
