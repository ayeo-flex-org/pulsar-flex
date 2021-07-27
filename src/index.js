const Pulsar = require('./client');
const producer = require('./producer');

const pulsar = {
  Pulsar,
  producer,
};

module.exports = pulsar;
