const { Socket } = require('socket.io');

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.get("/",(req,res)=>{
    res.sendfile("index.html");
    //res.sendfile('index.html');
});

io.on('connection',(socket)=>{
    console.log(" A user connected");
    socket.on('disconnect',()=>{
        console.log("A user disconnected");
    });
});


http.listen(3000,console.log("Listening on port : 3000"));

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res) {
//    res.sendfile('index.html');
// });

// //Whenever someone connects this gets executed
// io.on('connection', function(socket) {
//    console.log('A user connected');

//    //Whenever someone disconnects this piece of code executed
//    socket.on('disconnect', function () {
//       console.log('A user disconnected');
//    });
// });

// http.listen(3000, function() {
//    console.log('listening on *:3000');
// });