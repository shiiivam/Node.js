const EventEmitter = require('events');
const emitter = new EventEmitter();

//Receing data along with listeniing to an event 
emitter.on('logging',(message)=>{
    console.log(message);
});

//emitteting or raising an event

emitter.emit('logging','Logging In');





// //Listening Event
// emitter.on('messageLogged',function(){
//     console.log('Event Listened');
// });

// //Raising Event
// emitter.emit('messageLogged');