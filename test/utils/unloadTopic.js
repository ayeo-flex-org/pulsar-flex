const asyncExec = require('./asyncExec');
const config = require('../config');

const { containerName, topic } = config;

const unloadTopic = async () => {
  await asyncExec(`docker exec ${containerName} /pulsar/bin/pulsar-admin topics unload ${topic}`);
};

module.exports = unloadTopic;
