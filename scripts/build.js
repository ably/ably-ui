const webpack = require("webpack");
const { program } = require("commander");

const setupModules = require("./setup-modules");

const config =
  process.env.NODE_ENV === "production"
    ? require("../webpack.prod")
    : require("../webpack.dev");

program
  .option("-v, --verbose", "output extra information")
  .option("-w --watch", "watch files for changes");

program.parse(process.argv);

const options = program.opts();

const compile = (err, stats) => {
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

  setupModules({ verbose: !!options.verbose });
};

const compiler = webpack(config);

if (options.watch) {
  compiler.watch({}, compile);
} else {
  compiler.run(compile);
}
