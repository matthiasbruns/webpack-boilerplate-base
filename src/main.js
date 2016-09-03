// Since Babel only transforms syntax (like arrow functions), you can use babel-polyfill in order to support new globals such as Promise or new native methods like String.padStart (left-pad).
import flo from './flo'

var css = require('./css/base.css')
var scss = require('./styles/base.scss')

console.log('CSS', css)
