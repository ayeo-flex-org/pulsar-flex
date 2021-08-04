const asyncExec = require('./asyncExec');
const config = require('../config');

const { containerName } = config;

const deleteTopic = async ({ topicName }) =>
  asyncExec(`docker exec ${containerName} /pulsar/bin/pulsar-admin topics delete ${topicName} -f`);

module.exports = deleteTopic;
