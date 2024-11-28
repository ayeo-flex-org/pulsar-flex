const errors = require('../../errors');

class ResponseMediator {
  constructor({ client, timeout = 10000 }) {
    this._requests = {};
    this._commands = [];
    this._responseEvents = client.getResponseEvents();
    this._timeout = timeout;
    this._pendingTimeout = null;
  }

  _startToMediate() {
    this._commands.forEach((command) => {
      this._responseEvents.on(command, (eventData) => {
        const id = this._idFunc(eventData);
        this._requests[id] && this._requests[id].resolve(eventData);
        this._requests[id] && delete this._requests[id];
      });
    });
  }

  _parseCommand({ command }) {
    const baseCommand = command.toObject();
    const baseCommandTypeId = command.getType();
    return { command: Object.values(baseCommand)[baseCommandTypeId - 1] };
  }

  _idFunc() {}

  purgeRequests({ error }) {
    Object.values(this._requests).forEach(({ reject }) => reject(new error({})));
    clearTimeout(this._pendingTimeout); //ensure there are no dangling resources
  }

  response({ data, autoResolve }) {
    const id = this._idFunc(this._parseCommand(data));
    return new Promise((resolve, reject) => {
      autoResolve && resolve();
      this._pendingTimeout = setTimeout(() => reject(new errors.PulsarFlexResponseTimeoutError({ id })), this._timeout);
      this._requests[id] = { resolve, reject };
    });
  }
}

module.exports = ResponseMediator;
