const common = require("./webpack.common.js");

module.exports = common.map((config) => ({
  mode: "development",
  devtool: "inline-source-map",
  ...config,
}));
