const pulsarApi = require('../protocol/pulsar/pulsar_pb');
const constants = require('../config/constants');
const emitter = require('../network/emitter');
const connection = require('../network/connection');
const services = require('./services');

const client = ({ broker, timeout }) => {
  return {
    connect: async () => {
      const [host, port] = broker.split(':');
      const cnx = await connection({ host, port });
      const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.CONNECT);

      const commandConnect = baseCommand.setConnect(
        new pulsarApi.CommandConnect()
          .setClientVersion(constants.CLIENT_VERSION)
          .setAuthMethodName('none')
          .setProtocolVersion(17)
      );

      cnx.sendSimpleCommandRequest({ command: commandConnect });

      return new Promise((resolve, reject) => {
        setTimeout(
          () => reject(new Error(`Timed out while connecting to broker: ${broker}`)),
          timeout
        );

        emitter.data.on('connected', () => {
          emitter.data.on('ping', () => services.ponger({ cnx }));

          resolve({
            sendSimpleCommandRequest: cnx.sendSimpleCommandRequest,
            responseEmitter: emitter.data,
          });
        });
      });
    },
  };
};

module.exports = client;
