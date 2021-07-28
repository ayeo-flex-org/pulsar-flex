const client = require('./client');
const Producer = require('./producer');

const pulsar = {
  client,
  Producer,
};
module.exports = pulsar;
