const ablyUiConfig = require("../tailwind.config");

module.exports = {
  ...ablyUiConfig,
  purge: [
    "./app/views/**/*.html.erb",
    "./app/assets/**/*.js",
    "./app/assets/**/*.css",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.css",
  ],
};
