/* exposed by writting var a=; as very first line w/o comments

Node use IIFE to wrap the code as follows so this act as ModuleWrapper
(function (exports, require, module, __filename, __dirname) { var a =;

  so require and module are not global objects, they are module scoped
  exports => module.exports(just a reference so can't be changed)
*/
//var a =;
var url = 'http://some/url/for/logging';

console.log(__filename);
console.log(__dirname);

function log(message){
    //calls service for logging
    console.log(message);
}

//Since exports is a empty Object
// but we can change that as well
// module.exports = log;
module.exports.log = log;// exporting log function of this module