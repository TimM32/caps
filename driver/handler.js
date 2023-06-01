'use strict';

const eventEmitter = require('../event-pool');

const collectPackage = (payload) => {
    console.log('Driver; collected', payload.orderId);
    eventEmitter.emit('On the move', payload);
};

const movingPackage = (payload) => {
    setTimeout(() => {
        eventEmitter.emit('Package received', payload);
    }, 4000);
};

const deliveredPackage = (payload) => {
    console.log('Driver: received', payload.orderId);
    eventEmitter.emit('delivered', payload);
};

module.exports = { collectPackage, movingPackage, deliveredPackage };
