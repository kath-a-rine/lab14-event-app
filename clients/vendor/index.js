'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/nozama');

socket.on('ORDER', payload => {
  console.log(`Your order ${payload.orderId} is on the way!`)
  socket.emit('PICKUP', payload);
})
