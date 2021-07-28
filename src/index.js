const Pulsar = require('./client');
const Producer = require('./producer');
const Consumer = require('./consumer');

const pulsar = {
  Pulsar,
  Producer,
  Consumer,
};

module.exports = pulsar;
