'use strict';

const eventEmitter = require('../event-pool');
const { orderHandler, thanksDriver } = require('./handler');

jest.mock('../event-pool', () => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
    };
});

let consoleSpy

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
    consoleSpy.mockRestore();
});

describe('Vendor', (payload) => {
    test('Order is place and available', () => {
        let payload = { orderId: 1315, };
        orderHandler(payload);

        expect(consoleSpy).toHaveBeenCalledWith('Vendor: Order is for pickup', payload);
        expect(eventEmitter.emit).toHaveBeenCalledWith('pickup', payload);
    });

    test('We console log and emit the order message', () => {
        let payload = { orderId: 1315, };
        thanksDriver(payload);

        expect(consoleSpy).toHaveBeenCalledWith('Vendor: Thanks for making an order', payload.customer);
    });
});

