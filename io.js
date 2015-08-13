var io = require('socket.io')();

// The socket parameter represents a new client connection that comes in.
// Probably one of many.
// io is one server side object representing Socket.io

io.on('connection', function(socket){
  socket.on('add-circle', function(data){
    io.emit('add-circle', data);
  });
  socket.on('clear-display', function() {
    io.emit('clear-display');
  });
});

module.exports = io;
