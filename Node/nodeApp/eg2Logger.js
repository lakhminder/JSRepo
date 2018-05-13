/*
export the log function from this module
to be used in eg2MainApp
sample Module object
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'D:\\Lucky\\Study\\JavaScript\\Node\\nodeApp\\eg1MainApp.js',
  loaded: false,
  children: [],
  paths:
   [ 'D:\\Lucky\\Study\\JavaScript\\Node\\nodeApp\\node_modules',
     'D:\\Lucky\\Study\\JavaScript\\Node\\node_modules',
     'D:\\Lucky\\Study\\JavaScript\\node_modules',
     'D:\\Lucky\\Study\\node_modules',
     'D:\\Lucky\\node_modules',
     'D:\\node_modules' ] }

*/
var url = 'http://some/url/for/logging';

function log(message){
    //calls service for logging
    console.log(message);
}

//Since exports is a empty Object
// but we can change that as well
// module.exports = log;
module.exports.log = log;// exporting log function of this module