const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    vendors: [ './client/vendors.js' ],
    bundle: [ './client/index.js' ]
  },
  output: {
    path: './server/static',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'stage-1'] }},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'style!css') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader') },
      { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader?limit=100000' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpe?g)$/, loader: 'url-loader?limit=200000' }
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'client',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx', '.scss']
  },
  plugins: [
    new CleanWebpackPlugin(['server/static']),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new FaviconsWebpackPlugin('./client/images/logo.png'),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  postcss: function () {
    return [autoprefixer({
      browsers: ['last 2 versions']
    })];
  }
};
