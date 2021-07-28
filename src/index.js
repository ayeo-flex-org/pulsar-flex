const Pulsar = require('./client');
const producer = require('./producer');
const consumer = require('./consumer');

const pulsar = {
  Pulsar,
  producer,
  consumer,
};

module.exports = pulsar;
