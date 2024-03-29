const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const findImports = require("find-imports");

const packageJson = require("./package.json");

const externals = Object.keys(packageJson.dependencies);

const modules = require("./modules-config");

const cssRules = [
  {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
  },
];

const jsRules = [
  {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: ["babel-loader"],
  },
];

const imgRules = [
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  },
];

const highlightJsImportPaths = findImports(
  [
    "./src/core/utils/syntax-highlighter.js",
    "./src/core/utils/syntax-highlighter-registry.js",
  ],
  { flatten: true }
);

const externalsConfig = {
  externals: [...externals, ...highlightJsImportPaths].reduce(
    (acc, dependency) => {
      return {
        [dependency]: {
          commonjs: dependency,
          commonjs2: dependency,
        },
        ...acc,
      };
    },
    {}
  ),
};

const commonOutputConfig = {
  path: path.resolve(__dirname, "."),
  libraryTarget: "umd",
  globalObject: "this",
};

const modulesConfig = modules.map((mod) => ({
  ...externalsConfig,
  module: {
    rules: [...cssRules, ...jsRules, ...imgRules],
  },
  entry: {
    [mod.name]: {
      import: `./src/${mod.directory}/scripts.js`,
      filename: `${mod.directory}/scripts.js`,
    },
    [`${mod.name}-svg`]: {
      import: `./src/${mod.directory}/sprites.svg`,
      filename: `${mod.directory}/sprites.svg`,
    },
  },
  output: {
    ...commonOutputConfig,
    library: ["AblyUi", mod.name],
  },
  plugins: [
    new SVGSpritemapPlugin(`src/${mod.directory}/icons/*.svg`, {
      output: {
        filename: `src/${mod.directory}/sprites.svg`,
        svgo: false,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${mod.directory}/styles.css`,
    }),
  ],
}));

const componentsConfig = modules.map((mod) => ({
  ...externalsConfig,
  module: {
    rules: [...cssRules, ...jsRules, ...imgRules],
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
    rules: [
      { test: /\.css$/i, loader: "null-loader" },
      ...jsRules,
      ...imgRules,
    ],
  },
  entry: mod.components.reduce((acc, componentName) => {
    const path = `./src/${mod.directory}/${componentName}/component`;

    // react versions of components are optional
    if (!fs.existsSync(path)) return acc;

    return {
      [componentName]: {
        import: `./src/${mod.directory}/${componentName}/component`,
        filename: `${mod.directory}/${componentName}`,
      },
      ...acc,
    };
  }, {}),
  output: {
    ...commonOutputConfig,
  },
}));

module.exports = [...modulesConfig, ...componentsConfig, ...reactConfig];
