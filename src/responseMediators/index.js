const RequestIdResponseMediator = require('./requestIdResponseMediator');
const SendResponseMediator = require('./sendResponseMediator');
const NoIdResponseMediator = require('./noIdResponseMediator');

const responses = {
  RequestIdResponseMediator,
  SendResponseMediator,
  NoIdResponseMediator,
};

module.exports = responses;
