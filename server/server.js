'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);

const nozama = server.of('/nozama');

nozama.on('connection', socket => {

  socket.on('JOIN', room => {
    console.log(`You have joined room ${room}`);
    socket.join(room);
  });

  //ORDER
  socket.on('ORDER', payload => {
    logEvent('ORDER', payload);
    nozama.emit('ORDER', payload);
  });

  //PICKUP
  socket.on('PICKUP', payload => {
    logEvent('PICKUP', payload);
    nozama.emit('PICKUP', payload);
  });

  //IN-TRANSIT
  socket.on('IN-TRANSIT', payload => {
    logEvent('IN-TRANSIT', payload);
    nozama.emit('IN-TRANSIT', payload);// nozama.to?
  });

  //DELIVERED -
  socket.on('DELIVERED', payload => {
    logEvent('DELIVERED', payload);
    nozama.emit('DELIVERED', payload); // nozama.to?
  });

});

function logEvent(event, payload) {
  let time = new Date();
  console.log('EVENT', { event, time, payload });
}
