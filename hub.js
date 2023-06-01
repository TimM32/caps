'use strict';

let eventEmitter = require('./event-pool');

require('./vendor/index');
require('./driver/index');

eventEmitter.on('pickup', (payload) => logger('pickup', payload));
eventEmitter.on('on the move', (payload) => logger('on the move', payload));
eventEmitter.on('delivered', (payload) => logger('delivered', payload));

function logger(event, payload){
    const timestamp = new Date();
    console.log('Event:', { event. timestamp, payload});
}
