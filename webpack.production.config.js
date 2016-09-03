const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var buildPath = path.resolve(__dirname, '.build')
var mainPath = path.resolve(__dirname, 'src', 'main.js')

var config = {
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)?$/,
        loader: ExtractTextPlugin.extract(
          'style', // fallback
          'css!sass' // css & sass loading
        )
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: 'index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    })
  ]
}

module.exports = config
