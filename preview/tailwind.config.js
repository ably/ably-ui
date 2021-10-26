const extendConfig = require("@ably/ui/tailwind.extend.js");

module.exports = extendConfig((ablyUIConfig) => ({
  ...ablyUIConfig,
  purge: {
    content: [
      "./app/views/**/*.html.erb",
      "./app/assets/**/*.js",
      "./app/assets/**/*.css",
      "./app/javascript/**/*.js",
      "./app/javascript/**/*.css",
      "./app/components/**/*.html.erb",
      "./app/components/**/*.rb",
      ...ablyUIConfig.purge.content,
    ],
    options: {
      ...ablyUIConfig.purge.options,
    },
  },
}));
