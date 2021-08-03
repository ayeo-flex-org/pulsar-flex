const Producer = require('./producer');
const Consumer = require('./consumer');
const LEVELS = require('./utils');


const pulsar = {
  logLevel: LEVELS,
  Producer,
  Consumer,
};

module.exports = pulsar;
