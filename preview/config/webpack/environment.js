const { environment } = require("@rails/webpacker");

environment.resolvedModules.append("preview", "preview/node_modules");

module.exports = environment;
