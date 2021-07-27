const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const sendMessages = ({ numMessages, producerId, sequenceId }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.SEND);
  return baseCommand.setSend(
    new pulsarApi.CommandSend().setProducerId(producerId).setSequenceId(sequenceId)
  );
};

module.exports = sendMessages;
