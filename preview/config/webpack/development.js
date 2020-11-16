process.env.NODE_ENV = process.env.NODE_ENV || "development";

const environment = require("./environment");
const chokidar = require("chokidar");

environment.config.devServer.before = (_, server) => {
  chokidar
    .watch(["app/views", "../core/**/*.css"])
    .on("change", () => server.sockWrite(server.sockets, "content-changed"));
};

module.exports = environment.toWebpackConfig();
