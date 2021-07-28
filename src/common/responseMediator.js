class ResponseMediator {
  constructor({ idFunc, command, responseEvents }) {
    this._requests = {};
    this._idFunc = idFunc;
    this._command = command;
    this._responseEvents = responseEvents;
    
    this.startToMediate();
  }

  startToMediate() {
    this._responseEvents.on(this._command, (eventData) => {
      const requestId = this._idFunc(eventData);

      this._requests[requestId].resolve(eventData);
    });
  }

  response({ data }) {
    const requestId = this._idFunc(data);

    return new Promise((resolve, reject) => {
      this._requests[requestId] = { resolve, reject };
    });
  }
}

module.exports = ResponseMediator;
