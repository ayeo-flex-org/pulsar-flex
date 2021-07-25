const pulsarApi = require('../protocol/pulsar/pulsar_pb');

const producer = async ({ clientHandler, topic, producerConfiguration }) => {
  // fix the producer ID
  const { producerName = 'pulsar-flex' } = producerConfiguration;
  const { sendSimpleCommandRequest, responseEmitter } = clientHandler;
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.PRODUCER);
  const createProducer = baseCommand.setProducer(
    new pulsarApi.CommandProducer()
      .setTopic(topic)
      .setProducerId(1)
      .setRequestId(1)
      .setProducerName(producerName)
  );
  sendSimpleCommandRequest({ command: createProducer });

  const send = () => {
    // const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.SEND);
    // const sendMessage = baseCommand.send(
    //   new pulsarApi.CommandSend().setMessage('bla').setProducerId(1).setSequenceId('1');
    // )
    // return new Promise((resolve, reject) => {
    //   responseEmitter.on('success', (data) => {
    //     console.log('success');
    //     resolve(data);
    //   });
    //   responseEmitter.on('sendReceipt', (data) => {
    //     console.log('sendReceipt');
    //     resolve(data);
    //   });
    //   responseEmitter.on('error', () => {
    //     resolve('failed to close producer');
    //   });
    // });
  };

  const close = () => {
    const baseCommand = new pulsarApi.BaseCommand().setType(
      pulsarApi.BaseCommand.Type.CLOSE_PRODUCER
    );
    const closeProducer = baseCommand.setCloseProducer(
      new pulsarApi.CommandCloseProducer().setProducerId(1).setRequestId(2)
    );
    sendSimpleCommandRequest({ command: closeProducer });
    return new Promise((resolve, reject) => {
      responseEmitter.on('success', (data) => {
        resolve(data);
      });
      responseEmitter.on('error', () => {
        resolve('failed to close producer');
      });
    });
  };

  return new Promise((resolve, reject) => {
    responseEmitter.on('producerSuccess', (data) => {
      console.log(data);
      resolve({ close, send });
    });
    responseEmitter.on('error', () => {
      resolve('failed to create producer');
    });
  });
};

module.exports = producer;
