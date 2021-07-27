const commands = require('../../commands');

const create =
  ({ topic, getRequestId, producerId, client, setState }) =>
  async () => {
    const connectedClient = await client.connect();
    setState({ client: connectedClient });
    const { sendSimpleCommandRequest, responseEmitter } = connectedClient;
    const createProducer = commands.createProducer({
      topic,
      requestId: getRequestId(),
      producerId,
    });
    sendSimpleCommandRequest({ command: createProducer });
    return new Promise((resolve, reject) => {
      responseEmitter.on('producerSuccess', (data) => {
        const { lastSequenceId, producerName } = data.command;
        const sequenceId = lastSequenceId + 1;
        setState({ producerName, sequenceId });
        resolve();
      });
      responseEmitter.on('error', () => {
        resolve('failed to create producer');
      });
    });
  };

module.exports = create;
