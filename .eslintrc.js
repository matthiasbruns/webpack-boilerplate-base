module.exports = {
  root: true,
  extends: 'standard',
  plugins: [
    'standard',
    'promise'
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // do not add a space
    'space-before-function-paren': 0
  }
};
