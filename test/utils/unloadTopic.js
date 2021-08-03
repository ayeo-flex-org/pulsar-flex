const asyncExec = require('./asyncExec');
const config = require('../config');

const { topic, containerName } = config;

const produceMsgs = async () => {
  await asyncExec(`docker exec ${containerName} /pulsar/bin/pulsar-admin topics unload ${topic}`);
};

module.exports = produceMsgs;
