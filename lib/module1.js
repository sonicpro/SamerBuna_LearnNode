/*global module. require */

// lib/module1.js
module.exports.a = 1;

require('./module2');

module.exports.b = 2;
module.exports.c = 3;

