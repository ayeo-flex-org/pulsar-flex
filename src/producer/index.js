const services = require('./services');
const state = require('./state');

const producer = async ({ client, topic, producerConfiguration }) => {
  const producerState = state();
  const producerId = producerState.getProducerId();
  return {
    create: services.create({
      topic,
      getRequestId: producerState.getRequestId,
      producerId,
      client,
      setState: producerState.setState,
    }),
    close: services.close({
      producerId,
      getClient: producerState.getClient,
      getRequestId: producerState.getRequestId,
      setState: producerState.setState,
    }),
    send: services.send({
      producerId,
      getProducerName: producerState.getProducerName,
      getClient: producerState.getClient,
      getSequenceId: producerState.getSequenceId,
      setState: producerState.setState,
    }),
  };
};

module.exports = producer;
