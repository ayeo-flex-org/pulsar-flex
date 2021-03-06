const sendMessage = require('./sendMessage');
const sendBatch = require('./sendBatch');
const close = require('./close');
const create = require('./create');
const reconnect = require('./reconnect');
const producerClose = require('./producerClose');
const resendMessages = require('./resendMessages');

const services = {
  close,
  sendMessage,
  sendBatch,
  create,
  producerClose,
  reconnect,
  resendMessages,
};

module.exports = services;
