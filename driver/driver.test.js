'use strict';

const eventEmitter = require('../event-pool');
const { collectPackage, movingPackage, deliveredPackage } = require('./handler');

jest.mock('../evemt-pool', () => {
    return {
        on: jest.fn();
        emit: jest.fn();
    };
});

let consoleSpy;

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
    consoleSpy.mockRestore();
});

describe('Driver', () => {
    test('We have log and emit moving after package is collected', () => {
        let payload = { orderId: 1315 };
        collectPackage(payload);

        expect(eventEmitter.emit).toHaveBeenCalledWith('Moving', payload);
        expect(consoleSpy).toHaveBeenCalledWith('Driver: collected', payload.orderId);
    });

    test('We have log and emit moving after package is delivered', () => {
        let payload = { orderId: 1315 };
        deliveredPackage(payload);

        expect(eventEmitter.emit).toHaveBeenCalledWith('Delivered', payload);
        expect(consoleSpy).toHaveBeenCalledWith('Driver: delivered', payload.orderId);
    });

});
