const asyncExec = require('./asyncExec');
const config = require('../config');

const { containerName } = config;

const createSubscription = async ({ topicName, subscriptionName }) =>
  asyncExec(
    `docker exec ${containerName} /pulsar/bin/pulsar-admin topics create-subscription ${topicName} -s ${subscriptionName}`
  );

module.exports = createSubscription;
