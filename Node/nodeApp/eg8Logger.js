/* 
export the functionality as class
*/
const EventEmitter = require('events');

class Logger extends EventEmitter{//inheritance
  log(message){    
    console.log(message);
    this.emit('messageLogged', { id:1,eventDetails:message })
  }
}

module.exports = Logger;