/*
use Http module to create WEb server
http module extends EventEmitter
However prod based applications uses Express framework which is built on top of Http Module in Node
*/
const http = require('http'); 
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello');
        res.end();
    }

    if(req.url === '/api/dummyData'){
        res.write(JSON.stringify([1,2,{4:'num',6:'bus'}]));
        res.end();
    }
});

server.listen(3000);// listens on 3000 port
console.log('Listening on port 3000');




