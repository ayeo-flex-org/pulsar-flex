const subscribe = require('./subscribe');
const unsubscribe = require('./closeConsumer');
const flow = require('./flow');

const services = {
  subscribe,
  unsubscribe,
  flow,
};

module.exports = services;
