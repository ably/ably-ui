const ablyUiConfig = require("@ably/ably-ui/tailwind.config.js");

module.exports = {
  ...ablyUiConfig,
  purge: [
    "./app/views/**/*.html.erb",
    "./app/assets/**/*.js",
    "./app/assets/**/*.css",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.css",
    "./app/components/**/*.html.erb",
    "./app/components/**/*.rb",
    "./node_modules/@ably/ably-ui/**/*"
  ],
};
