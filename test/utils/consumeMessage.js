const asyncExec = require('./asyncExec');
const config = require('../config');

const { containerName } = config;

const consumeMessage = async ({ numberOfMessages, subscriptionName, topicName }) =>
  asyncExec(
    `docker exec ${containerName} /pulsar/bin/pulsar-client consume  ${topicName} -n ${numberOfMessages} -s ${subscriptionName}`
  );

module.exports = consumeMessage;
