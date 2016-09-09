# Webpack Base Boilerplate

[![Build Status](https://travis-ci.org/matthiasbruns/webpack-boilerplate-base.svg?branch=master)](https://travis-ci.org/matthiasbruns/webpack-boilerplate-base)

> This projects aims to simplify frontend development using webpack. It handles basic things like scss compilation, js bundling and development hot reloading.

## Getting Started

### Development

Run development server with **webpack-dev-server**:

````npm run dev````

### Production

Build for production. The default production build folder is `dist`:

````npm run build````

## Structure

`index.html` Entrypoint HTML template

`dist` Production build target

`src` Application source

## Webpack

### Configurations

`webpack.config.js` Base config for development and production

`webpack.dev.config.js` Config overrides/enhancements for development

`webpack.production.config.js` Config overrides/enhancements for production

### Loaders

* **babel**
* **css**
* **file**
* **html**
* **json**
* **style**

### Plugins

* **ExtractTextPlugin**
* **HtmlWebpackPlugin**
* **UglifyJsPlugin**
