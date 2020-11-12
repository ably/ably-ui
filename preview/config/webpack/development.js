process.env.NODE_ENV = process.env.NODE_ENV || "development";

const path = require("path");
const environment = require("./environment");

environment.config.devServer.watchContentBase = true;
environment.config.devServer.contentBase = [
  path.join(__dirname, "../../app/views"),
  path.join(__dirname, "../../../src"),
  path.join(__dirname, "../../../lib"),
  path.join(__dirname, "../../../core"),
];

module.exports = environment.toWebpackConfig();
