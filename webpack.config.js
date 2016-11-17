const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const utility = require('./util');

// TODO: Look at re-implementing the SASS loader rules originally used.

module.exports = {
  context: path.join(__dirname),
  devtool: '#source-map',
  entry: {
    index: utility.entryPoint('index'),
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle-[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'INDEX.HTML',
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['index'],
    }),
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.css/,
        loaders: ['style', 'css'],
      },
      // This works, for some reason....
      // {
      // test: /\.scss$/,
      // loaders: ['style', 'css', 'postcss', 'sass'],
      // },
      {
        test: /\.scss/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'postcss',
          'sass?outputStyle=expanded&sourceMap',
        ],
        include: path.join(__dirname, 'src/styles'),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file',
      },
    ],
  },

  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [path.resolve(__dirname, './src')],
  },

  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.json', '.js', '.jsx'],
  },
};
