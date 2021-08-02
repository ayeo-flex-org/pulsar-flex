const asyncExec = require('./asyncExec');
const config = require('../config');

const { topic, containerName } = config;

const produceMsgs = async ({ messages }) => {
  // ESLint should not do this VVVVVVVVVVVVVVV
  await asyncExec(
    `docker exec ${containerName} /pulsar/bin/pulsar-client produce -m ${messages.join(
      ','
    )} ${topic}`
  );
};

module.exports = produceMsgs;
