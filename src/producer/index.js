const pulsarApi = require('../protocol/pulsar/pulsar_pb');

const producer = ({ clientHandler, topic, producerConfiguration }) => {
  // fix the producer ID
  const { producerName = 'pulsar-flex' } = producerConfiguration;
  const { sendSimpleCommandRequest, responseEmitter } = clientHandler;

  const connect = async () => {
    const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.PRODUCER);

    const commandProducer = baseCommand.setProducer({
      topic,
      producer_id: 1,
      request_id: 1,
      producer_name: producerName,
    });
    return clientHandler.sendSimpleCommandRequest({ command: commandProducer });
  };
};

module.exports = producer;
