const emitter = require('./emitter');
const commands = require('../commands');
const connection = require('./network/connection');
const services = require('./services');
const responsesMediator = require('../responseMediators');
const errors = require('../errors');

class Client {
  constructor({ broker, timeout, jwt }) {
    this._broker = broker;
    this._timeout = timeout;
    this._jwt = jwt;
    this._cnx = null;
    this._responseMediator = null;
  }

  async connect() {
    this._responseMediator = new responsesMediator.NoIdResponseMediator({
      commands: ['connected', 'ping', 'pong', 'error'],
      client: this,
    });

    const [host, port] = this._broker.split(':');
    const connectCommand = commands.connect({ protocolVersion: 17, jwt: this._jwt });

    this._cnx = await connection({ host, port });

    const { command } = await this._cnx.sendSimpleCommandRequest(
      { command: connectCommand },
      this._responseMediator
    );

    if (command.error) throw new errors.PulsarFlexConnectionError({ message: command.message });

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
