const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mergedConfig = merge(baseConfig, {
  devtool: 'source-map',

  plugins: [
    // Search for equal or similar files and deduplicate them
    new webpack.optimize.DedupePlugin(),

    // Minimize all JavaScript output of chunks
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),

    // Generates a solid base html page for your web application
    // with all your webpack generated css and js files built in
    new HtmlWebpackPlugin({
      inject: true,
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
})

module.exports = mergedConfig
