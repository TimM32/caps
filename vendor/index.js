'use strict';

const { orderHandler, orderMessage } = require('./handler');
const eventEmitter = require('../event-pool');

setInterval(() =>{
  eventEmitter.emit('Package ready');
}, 4000);

eventEmitter.on('Package ready', orderHandler);
eventEmitter.on('received', orderMessage);
