

const Logger = require('./logging');

const log = new Logger();

log.on('messageLogged',(mess)=>{
    console.log(mess);
});

log.sig('Logging in!');

