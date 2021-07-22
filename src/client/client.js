const pulsarApi = require('../protocol/pulsar/pulsar_pb');
const createSocket = require('./socket');

const buildSimpleCommand = ({ command }) => {
  const serializedBinary = command.serializeBinary();

  const commandSizeBuffer = Buffer.alloc(4);
  const totalSizeBuffer = Buffer.alloc(4);

  commandSizeBuffer.writeInt32BE(serializedBinary.length);
  totalSizeBuffer.writeInt32BE(serializedBinary.length + commandSizeBuffer.length);

  return Buffer.concat([totalSizeBuffer, commandSizeBuffer, serializedBinary]);
};

const client = {
  connect: async ({ brokers }) => {
    const baseCommand = new pulsarApi.BaseCommand();
    baseCommand.setType(pulsarApi.BaseCommand.Type.CONNECT);

    const commandConnect = baseCommand.setConnect(
      new pulsarApi.CommandConnect()
        .setClientVersion('Pulsar Clienttttttttt')
        .setAuthMethodName('none')
        .setProxyToBrokerUrl('http://localhost:8080')
        .setProtocolVersion(17)
    );

    const socket = await createSocket({
      host: '192.168.99.100',
      port: '6650',
      onData: (data) => console.log(data),
      onEnd: () => console.log('fin'),
      onTimeout: () => console.log('timed out buddy'),
      onError: () => console.log('lol'),
    });
    const buffer = buildSimpleCommand({ command: commandConnect });

    socket.write(buffer, 'binary');
  },
  disconnect: () => {},
  sendProtoCommand: ({ command }) => {},
};

module.exports = client;
