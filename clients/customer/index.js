'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/nozama');

const Chance = require('chance');
const chance = new Chance();

setInterval(() => {
  let order = {
    orderId: chance.integer({min: 1, max: 1000}),
    customerName: chance.name(),
    address: chance.address(),
  };

  socket.emit('ORDER', order);
}, 2000);

socket.on('IN-TRANSIT', payload => {
  console.log(`Order ${payload.orderId} is in transit.`);
});

socket.on('DELIVERED', payload => {
  console.log(`Order ${payload.orderId} has been delivered.`);
});
