const ablyUIConfig = require("./tailwind.config");
const path = require("path");

const ablyUiConfigPath = path.dirname(require.resolve("./tailwind.config.js"));

const ablyUITailwindConfig = (extend) => {
  // Create absolute paths to built assets (core, reset) in AblyUI, set as content source
  const configWithPlugin = {
    ...ablyUIConfig,
    content: [
      path.join(ablyUiConfigPath, "core", "**", "*.js"),
      path.join(ablyUiConfigPath, "reset", "**", "*.js"),
    ],
  };

  return extend(configWithPlugin);
};

module.exports = ablyUITailwindConfig;
