/*

*/
const EventEmitter = require('events'); // returns a class
const emitter = new EventEmitter(); // creates object

//register a Listener
//emitter.addListener => hava an alias method 'on', better use that
//version 1
/*
emitter.on('messageLogged' , function(eventArg){// 1=> eventName, 2=> listener/callback // eventArg is the eventData passed if any
    console.log('Listener called!!' + eventArg);
});
*/
//version 2 using arrow function from ES6 onwards
emitter.on('messageLogged' , (eventArg) => {// 1=> eventName, 2=> listener/callback
    console.log('Listener called!!', eventArg);
});
//Raise an event 1=> eventName 2=> eventData (better to sent as object)
emitter.emit('messageLogged', { id:1,eventDetails:'msg 1' });// event name





