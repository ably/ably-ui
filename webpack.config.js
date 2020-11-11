const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const modules = require("./modules-config");

const commonConfig = {
  mode: "development",
  devtool: "source-map",
};

const commonOutputConfig = {
  path: path.resolve(__dirname, "."),
  libraryTarget: "umd",
};

const modulesConfig = modules.map((mod) => ({
  ...commonConfig,
  entry: {
    [mod.name]: {
      import: `./src/${mod.directory}/scripts.js`,
      filename: `${mod.directory}/scripts.js`,
    },
  },
  output: {
    ...commonOutputConfig,
    library: ["AblyUi", "[name]"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${mod.directory}/styles.css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
}));

const componentsConfig = modules.map((mod) => ({
  ...commonConfig,
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${mod.directory}/[name]/component.css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
}));

const reactConfig = modules.map((mod) => ({
  ...commonConfig,
  entry: mod.components.reduce(
    (acc, componentName) => ({
      [componentName]: {
        import: `./src/${mod.directory}/${componentName}/component.jsx`,
        filename: `${mod.directory}/${componentName}.jsx`,
      },
      ...acc,
    }),
    {}
  ),
  output: {
    path: path.resolve(__dirname, "."),
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
    },
  },
}));

module.exports = [...modulesConfig, ...componentsConfig, ...reactConfig];
