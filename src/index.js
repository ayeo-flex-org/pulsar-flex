const client = require('./client');
const producer = require('./producer');

const pulsar = {
  client,
  producer,
};
module.exports = pulsar;
