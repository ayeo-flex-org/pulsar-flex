const errors = require('../../errors');

class ResponseMediator {
  constructor({ client }) {
    this._requests = {};
    this._commands = [];
    this._responseEvents = client.getResponseEvents();
  }

  _startToMediate() {
    this._commands.forEach((command) => {
      this._responseEvents.on(command, (eventData) => {
        console.log('mashu');
        console.log(command);
        console.log(JSON.stringify(eventData));
        const id = this._idFunc(eventData);
        console.log('mishei');
        this._requests[id] && this._requests[id].resolve(eventData);
        console.log('what');
        this._requests[id] && delete this._requests[id];
        console.log('bro');
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
  }

  response({ data, timeout = 5000 }) {
    console.log('galrose');
    console.log(JSON.stringify(this._requests));
    const id = this._idFunc(this._parseCommand(data));
    console.log('sinai');
    return new Promise((resolve, reject) => {
      console.log('joseph');
      this._requests[id] = { resolve, reject };
      console.log('told u');
    });
  }
}

module.exports = ResponseMediator;
