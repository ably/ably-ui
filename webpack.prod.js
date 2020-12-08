const common = require("./webpack.common.js");

module.exports = common.map((config) => ({
  mode: "production",
  ...config,
}));
