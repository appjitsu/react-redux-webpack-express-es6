const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    // vendor.js
    vendors: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './client/vendors.js'
    ],
    // bundle.js
    bundle: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './client/index.js'
    ]
  },
  output: {
    path: './server/static',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new FaviconsWebpackPlugin('./client/images/brand/cinchapi-logo-alt.png'),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: true
    }),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  postcss: function () {
    return [autoprefixer({
      browsers: ['last 2 versions']
    })];
  },
  devServer: {
    historyApiFallback: true
  }
};
