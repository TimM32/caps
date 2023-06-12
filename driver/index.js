'use strict';

const eventEmitter = require('../event-pool');
const { collectPackage, movingPackage, deliveredPackage } = require('./handler');

eventEmitter.on('Collect', collectPackage);
eventEmitter.on('Moving', movingPackage);
eventEmitter.on('Delivered', deliveredPackage);
