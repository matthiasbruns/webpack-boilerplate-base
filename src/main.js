// Since Babel only transforms syntax (like arrow functions), you can use
// babel-polyfill in order to support new globals such as Promise or new
// native methods like String.padStart (left-pad).
import 'babel-polyfill'

// SCSS reference - will be compiled by webpack
import 'assets/stylesheets/main.scss'

console.log('test')
