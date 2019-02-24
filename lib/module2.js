/*global require */

// lib/module2.js

// Requiring a module that in turn requires this module - circular dependency demo.
const module1 = require('./module1'); // reads what's in the module1.exports at the moment module1 requires this module.
console.log('module1 is partially loaded here.', module1);

