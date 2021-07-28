const Pulsar = require('./client');
const producer = require('./producer');
const Consumer = require('./consumer');

const pulsar = {
  Pulsar,
  producer,
  Consumer,
};

module.exports = pulsar;
