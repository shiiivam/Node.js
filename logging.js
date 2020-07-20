const EventEmitter = require('events');

class Logging extends EventEmitter{
    //We don't need to write function keyword in defining a function inside a class
sig(message){

    console.log(message);

    this.emit('messageLogged','Successfully logged in!');

    }
}

module.exports = Logging;