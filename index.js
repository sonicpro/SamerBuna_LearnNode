/*global module, require, setImmediate */

module.exports = function () {};
console.log('In index', module);

// UTIL is the reference to what is in util module's exports.
const UTIL = require('./lib/util');
console.log('UTIL:', UTIL);

// The following line causes both index and lib/util modules to be "loaded: true".
// also notice that for the loaded lib/util module its exports property has changed from a literal to [Object].
setImmediate(() => console.log('The index.js module object is now loaded!', module));

