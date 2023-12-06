const { environment } = require("@rails/webpacker");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

environment.config.delete('node');
environment.resolvedModules.append("preview", "preview/node_modules");

// Use to inspect webpack config
const log = environment => {
  // eslint-disable-next-line no-extend-native
  RegExp.prototype.toJSON = RegExp.prototype.toString;
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(environment.toWebpackConfig(), null, ' '));
};

environment.plugins.delete('MiniCssExtract');

environment.plugins.insert(
  'MiniCssExtract',     
  new MiniCssExtractPlugin({
    filename: 'css/[name]-[contenthash:8].css',
    chunkFilename: 'css/[name]-[contenthash:8].chunk.css'
  },
  { before: 'Manifest' }
));


const cssMiniCSSExtractLoader = environment.loaders.get('css').use.findIndex(obj => typeof obj === 'string' && obj.includes('mini-css-extract-plugin'));
environment.loaders.get('css').use[cssMiniCSSExtractLoader] = MiniCssExtractPlugin.loader;

const cssPostCSSLoader = environment.loaders.get('css').use.find(obj => obj.loader === 'postcss-loader');
cssPostCSSLoader.options = {
  postcssOptions: { config: path.resolve(__dirname, '..', '..', 'postcss.config.js') },
  sourceMap: true,
};

const sassMiniCSSExtractLoader = environment.loaders.get('sass').use.findIndex(obj => typeof obj === 'string' && obj.includes('mini-css-extract-plugin'));
environment.loaders.get('sass').use[sassMiniCSSExtractLoader] = MiniCssExtractPlugin.loader;

module.exports = environment;
