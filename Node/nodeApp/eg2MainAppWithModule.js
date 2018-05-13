/*
need to load logger module use require()
retrun type of require() is Module.exports object
*/

//require('./eg2Logger.js');
//var logger = require('./eg2Logger');// will append js auto
const logger = require('./eg2Logger');// better to use as constant

logger.log('Message');
