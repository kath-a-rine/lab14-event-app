'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/nozama');

socket.on('PICKUP', payload => {
  setTimeout(() => {
    console.log(`Order ${payload.orderId} has been picked up and is in transit`);
    socket.emit('IN-TRANSIT', payload);
  }, 3000);

  setTimeout(() => {
    console.log(`Order ${payload.orderId} has been delivered`);
    socket.emit('DELIVERED', payload);
  }, 6000);
});
