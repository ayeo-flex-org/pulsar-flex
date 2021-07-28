const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const sendMessages = ({ producerId, sequenceId, numMessages = 1 }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.SEND);
  return baseCommand.setSend(
    new pulsarApi.CommandSend()
      .setProducerId(producerId)
      .setSequenceId(sequenceId)
      .setNumMessages(numMessages)
  );
};

module.exports = sendMessages;
