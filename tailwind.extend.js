const ablyUIConfig = require("./tailwind.config");
const path = require("path");

const ablyUiConfigPath = path.dirname(require.resolve("./tailwind.config.js"));

const ablyUItailwindConfig = (extend) => {
  // Create absolute paths to templates in AblyUI
  const addPurgeContentPaths = () => {
    const paths = ["*.html.erb", "*.jsx", "*.js", "*.json"].map((fileGlob) =>
      path.join(ablyUiConfigPath, "src", "**", fileGlob)
    );

    return paths;
  };

  const configWithPlugin = {
    ...ablyUIConfig,
    content: addPurgeContentPaths(),
  };

  return extend(configWithPlugin);
};

module.exports = ablyUItailwindConfig;
