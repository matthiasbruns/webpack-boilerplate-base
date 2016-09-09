const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src')
const buildPath = path.resolve(__dirname, 'dist')
const mainAppPath = path.resolve(srcPath, 'main.js')

const environment = process.env.NODE_ENV || 'development'

const FILENAME_TEMPLATE = '[name].[hash:7].[ext]'

module.exports = {
  entry: {
    app: mainAppPath
  },

  output: {
    path: buildPath,  // output directory
    filename: 'assets/js/[name].[hash].js',
    chunkFilename: 'assets/js/[id].[hash].js'
  },

  resolve: {
    alias: {
      // src/assets shall be accessable with the alias 'assets'
      'assets': path.resolve(__dirname, 'src', 'assets')
    }
  },

  module: {
    preLoaders: [
      // Lint .js files with eslint
      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath,
        exclude: /node_modules/
      }
    ],

    loaders: [
      // Load .js files with babel-loader for transpiling ES6
      // See .babelrc for configured presets/stages
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // HTML
      // Handle <img> and <link> tags in the entrypoint index.html
      {
        test: /\.(html)?$/,
        loader: 'html',
        query: {
          attrs: ['img:src', 'link:href'],
          root: path.resolve(__dirname, 'src')
        }
      },
      // SASS/CSS
      // CSS-loader: resolves @import and url()
      // SASS-loader: compiles to css via node-sass
      {
        test: /\.(css|scss|sass)?$/,
        loader: ExtractTextPlugin.extract(
          'style', // fallback
          'css!sass'
        )
      },
      // JSON
      {
        test: /\.json$/,
        loader: 'json'
      },
      // Images
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'assets/imgs/' + FILENAME_TEMPLATE
        }
      },
      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'assets/fonts/' + FILENAME_TEMPLATE
        }
      },
      // Documents
      {
        test: /\.(pdf)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'assets/docs/' + FILENAME_TEMPLATE
        }
      }
    ]
  },

  plugins: [
    // Extract inlined CSS into dedicated output file
    new ExtractTextPlugin('assets/styles/[name].[contenthash:7].css'),

    // Create global constants which can be configured at compile time
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"' + environment + '"'
      }
    })
  ],

  // Loader specific configurations
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
