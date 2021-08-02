const subscribe = require('./subscribe');
const unsubscribe = require('./closeConsumer');
const flow = require('./flow');
const ack = require('./ack');

const services = {
  subscribe,
  unsubscribe,
  flow,
  ack,
};

module.exports = services;
