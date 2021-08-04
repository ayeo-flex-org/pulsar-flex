const asyncExec = require('./asyncExec');
const config = require('../config');

const { topic, containerName } = config;

const consumeMessage = async ({ numberOfMessages }) =>
  asyncExec(
    `docker exec ${containerName} /pulsar/bin/pulsar-client consume -n ${numberOfMessages} ${topic}`
  );

module.exports = consumeMessage;
