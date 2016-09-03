# Webpack Base Boilerplate [![Build Status](https://secure.travis-ci.org/webpack-boilerplate-base.svg?branch=master)](http://travis-ci.org/webpack-boilerplate-base)

This projects aims to simplify the frontend development using webpack.
It handles basic things like scss compilation, js bundling and development hot reloading.

## Getting Started

### Development

````npm run dev````

Run development server with **webpack-dev-server**

### Production

````npm run build````

Build for production - the default production build folder is **.build**

## Structure

````index.html```` will be used as the html template by webpack

````.build/```` this folder is the production build target

````src/```` this folder contains the application source code

## Webpack

### Configurations

````webpack.config.js```` Development config

````webpack.production.config.js```` Production config

### Loaders

* **babel**
* **style**
* **css**
* **json**
* **file**

### Plugins

* **ExtractTextPlugin**
* **HtmlWebpackPlugin**
* **UglifyJsPlugin**
