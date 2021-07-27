const emitter = require('./emitter');
const commands = require('../commands');
const connection = require('./network/connection');
const services = require('./services');
const errors = require('../errors');

class client {
  constructor({ broker, timeout, jwt }) {
    this._broker = broker;
    this._timeout = timeout;
    this._jwt = jwt;
    this._cnx = null;
  }

  async connect() {
    const [host, port] = this._broker.split(':');
    const connectCommand = commands.connect({ protocolVersion: 17, jwt: this._jwt });

    this._cnx = await connection({ host, port });
    this._cnx.sendSimpleCommandRequest({ command: connectCommand });

    return new Promise((resolve, reject) => {
      setTimeout(
        () => reject(new errors.PulsarFlexBrokerTimeoutError({ host, port })),
        this._timeout
      );

      emitter.data.on('connected', () => {
        services.pinger({ cnx: this._cnx, pingingIntervalMs: 60000 });
        services.ponger({ cnx: this._cnx });

        resolve();
      });
    });
  }

  getCnx() {
    return this._cnx;
  }

  getResponseEvents() {
    return emitter.data;
  }
}

module.exports = client;
