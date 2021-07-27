const emitter = require('./emitter');
const commands = require('../commands');
const connection = require('./network/connection');
const services = require('./services');

const client = ({ broker, timeout, jwt }) => {
  return {
    connect: async () => {
      const [host, port] = broker.split(':');
      const cnx = await connection({ host, port });

      const connectCommand = commands.connect({ protocolVersion: 17, jwt });

      cnx.sendSimpleCommandRequest({ command: connectCommand });

      return new Promise((resolve, reject) => {
        setTimeout(
          () => reject(new Error(`Timed out while connecting to broker: ${broker}`)),
          timeout
        );

        emitter.data.on('connected', () => {
          services.pinger({ cnx, pingingIntervalMs: 60000 });
          services.ponger({ cnx });

          resolve({
            sendSimpleCommandRequest: cnx.sendSimpleCommandRequest,
            sendPayloadCommandRequest: cnx.sendPayloadCommandRequest,
            sendBatchPayloadCommandRequest: cnx.sendPayloadCommandRequest,
            responseEmitter: emitter.data,
          });
        });
      });
    },
  };
};

module.exports = client;
