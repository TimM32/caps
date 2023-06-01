'use strict';

const Chance = require('chance');
const eventEmitter = require('../event-pool');

let chance = new Chance();

const orderHandler = (payload = null) =< {
    if(!payload) {
        payload = {
            store: chance.company(),
            orderId: chance.guid(),
            customer: chance.name(),
            address: chance.address(),
        };
    }

    console.log('Vendor: Order is ready', payload);
    eventEmitter.emit('pickup', payload);
};

const thanksDriver = (payload) => console.log('Vendor: Thanks for placing an order', payload.customer);

const orderMessage = (payload) => {
    setTimeout(() => {
        thanksDriver(payload);
    }, 3000);
};

module.exports = { orderHandler, orderMessage, thanksDriver };




