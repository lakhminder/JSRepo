/*
use Logger as module which will emit event when the message is logged by it
*/
const Logger = require('./eg8Logger'); 
const logger = new Logger();

logger.on('messageLogged' , (eventArg) => {// 1=> eventName, 2=> listener/callback
    console.log('Listener called!!', eventArg);
});

logger.log('Message sent from APP');





