/*
os is an inbuilt module
to play with Operating System
*/


const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();

//console.log('Toal Memory: ' + totalMem);

//Template String
//After ES6/ ES2015/ ECMAScript6

console.log(`Total Memory ${totalMem/(1024*1024)} Mb`);
console.log(`Free Memory ${freeMem/(1024*1024)} Mb`);
