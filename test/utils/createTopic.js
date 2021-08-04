const asyncExec = require('./asyncExec');
const config = require('../config');

const { containerName } = config;

const createTopic = async ({ topicName }) =>
  asyncExec(`docker exec ${containerName} /pulsar/bin/pulsar-admin topics create ${topicName}`);

module.exports = createTopic;
