const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.config.js')

const environment = process.env.NODE_ENV || 'development'
const packageVersion = require('./package.json').version

module.exports = merge(baseConfig, {
  cache: true,      // Cache generated modules and chunks to improve performance
  debug: true,      // Switch loaders to debug module
  devtool: 'eval',  // Each module is executed with eval and //@ sourceURL.
  devserver: {
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
    // proxy: {
    //   '/api': {
    //     target: 'https://other-server.example.com',
    //     secure: false
    //   }
    // }
  },
  plugins: [
    // Generates a solid base html page for your web application
    // with all your webpack generated css and js files built in
    new HtmlWebpackPlugin({
      inject: true,           // inject assets into template
      template: 'index.html',
      filename: 'index.html',
      environment,
      packageVersion
    })
  ]
})
