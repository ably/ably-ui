const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

const modules = require("./modules-config");

const cssRules = [
  {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
  },
];

const jsRules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ["babel-loader"],
  },
];

const externalsConfig = {
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
    },
  },
};

const commonOutputConfig = {
  path: path.resolve(__dirname, "."),
  libraryTarget: "umd",
  globalObject: "this",
};

const modulesConfig = modules.map((mod) => ({
  ...externalsConfig,
  module: {
    rules: [...cssRules, ...jsRules],
  },
  entry: {
    [mod.name]: {
      import: `./src/${mod.directory}/scripts.js`,
      filename: `${mod.directory}/scripts.js`,
    },
  },
  output: {
    ...commonOutputConfig,
    library: ["AblyUi", mod.name],
  },
  plugins: [
    new SVGSpritemapPlugin(`src/${mod.directory}/icons/*.svg`, {
      output: {
        filename: `${mod.directory}/sprites.svg`,
        svgo: false,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${mod.directory}/styles.css`,
    }),
    new ExtraWatchWebpackPlugin({
      files: ["src/**/*.erb", "src/**/*.rb"],
    }),
  ],
}));

const componentsConfig = modules.map((mod) => ({
  ...externalsConfig,
  module: {
    rules: [...cssRules, ...jsRules],
  },
  entry: mod.components.reduce(
    (acc, componentName) => ({
      [componentName]: {
        import: `./src/${mod.directory}/${componentName}/component.js`,
        filename: `${mod.directory}/${componentName}/component.js`,
      },
      ...acc,
    }),
    {}
  ),
  output: {
    ...commonOutputConfig,
    library: ["AblyUi", mod.name, "[name]"],
    libraryExport: "default",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${mod.directory}/[name]/component.css`,
    }),
  ],
}));

const reactConfig = modules.map((mod) => ({
  ...externalsConfig,
  module: {
    rules: [{ test: /\.css$/i, loader: "null-loader" }, ...jsRules],
  },
  entry: mod.components.reduce((acc, componentName) => {
    const path = `./src/${mod.directory}/${componentName}/component.jsx`;

    // react versions of components are optional
    if (!fs.existsSync(path)) return acc;

    return {
      [componentName]: {
        import: `./src/${mod.directory}/${componentName}/component.jsx`,
        filename: `${mod.directory}/${componentName}.jsx`,
      },
      ...acc,
    };
  }, {}),
  output: {
    ...commonOutputConfig,
  },
}));

module.exports = [...modulesConfig, ...componentsConfig, ...reactConfig];
