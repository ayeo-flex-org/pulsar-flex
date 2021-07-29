const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const buildLookup = ({ requestId, topic }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.LOOKUP);
  const commandConnect = new pulsarApi.CommandLookupTopic()
    .setTopic(topic)
    .setRequestId(requestId)
    .setAuthoritative(false);

  return baseCommand.setLookuptopic(commandConnect);
};

module.exports = buildLookup;
