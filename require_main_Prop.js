/*global require, module, process */

// This script can be called two-fold:
// 1 - as a standalone js script, like this: ">node require_main_Prop.js 8 Hello"
// 2 - as a Node module, like "node; >const func = require('./require_main_Prop')." In this case it will exports printInFrame function.

const printInFrame = (size, header) => {
    console.log('*'.repeat(size));
    console.log(header);
    console.log('*'.repeat(size));
};

// require.main property helps to detect the case when the file is used as a standalone script (not "required").
// If that is the case, require.main contains the reference to the module object associated with the file we're executing.
// Remember that when a script is executed through "node <script>.js", the code inside <script.js> is wrapped inside the wrapper function.
// The second argument to wrapper function is "require" object with require.main pointing to "module" object.
if (require.main === module) {
    printInFrame(process.argv[2], process.argv[3]);
} else {
    module.exports = printInFrame;
}
