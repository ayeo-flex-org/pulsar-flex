const emitter = require('./emitter');
const commands = require('../commands');
const connection = require('./network/connection');
const services = require('./services');
const common = require('../common');

class Client {
  constructor({ broker, timeout, jwt }) {
    this._broker = broker;
    this._timeout = timeout;
    this._jwt = jwt;
    this._cnx = null;
    this._responseMediator = new common.ResponseMediator({
      idFunc: () => 1,
      commands: ['connected', 'ping', 'pong'],
      responseEvents: emitter.data,
    });
  }

  async connect() {
    const [host, port] = this._broker.split(':');
    const connectCommand = commands.connect({ protocolVersion: 17, jwt: this._jwt });

    this._cnx = await connection({ host, port });

    await this._cnx.sendSimpleCommandRequest({ command: connectCommand }, this._responseMediator);

    services.pinger({
      cnx: this._cnx,
      pingingIntervalMs: 60000,
      responseMediator: this._responseMediator,
    });
    services.ponger({ cnx: this._cnx, responseMediator: this._responseMediator });
  }

  getCnx() {
    return this._cnx;
  }

  getResponseEvents() {
    return emitter.data;
  }
}

module.exports = Client;
