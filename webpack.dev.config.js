const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  cache: true,      // Cache generated modules and chunks to improve performance
  debug: true,      // Switch loaders to debug module
  devtool: 'eval'   // Each module is executed with eval and //@ sourceURL.
})
