/*
fs is an inbuilt module
to play with file System

it has all methods in pair 1=> synch and 2 =>Asynch (with callbacks)
Always use Asynch 

*/
const fs = require('fs');

const filesArr = fs.readdirSync('./');
console.log(filesArr);

fs.readdir('./', function(err,filesArrAsynch){// callback takes 2 params 1=> error 2=> string[] for result
    if(err)
        console.log(`Error: ${err}`);
    else{
        console.log(`result: ${filesArrAsynch}`);// as csv is print
        console.log(filesArrAsynch);// array is print
    }
        
});




