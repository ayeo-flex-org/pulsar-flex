const asyncExec = require('./asyncExec');
const config = require('../config');

const { topic, containerName } = config;

const produceMessages = async ({ messages }) => {
  await asyncExec(
    `docker exec ${containerName} /pulsar/bin/pulsar-client produce -m ${messages.join(
      ','
    )} ${topic}`
  );
};

module.exports = produceMessages;
