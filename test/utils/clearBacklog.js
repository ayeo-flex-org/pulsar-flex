const asyncExec = require('./asyncExec');
const config = require('../config');

const { containerName, topic, subscription } = config;

const clearBacklog = async () => {
  await asyncExec(
    `docker ${containerName} exec /pulsar/bin/pulsar-admin topics clear-backlog -s ${subscription} ${topic}`
  );
};

module.exports = clearBacklog;
