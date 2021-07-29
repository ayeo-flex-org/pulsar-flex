const sendMessage = require('./sendMessage');
const sendBatch = require('./sendBatch');
const close = require('./close');
const create = require('./create');
const reconnect = require('./reconnect');

const services = {
  close,
  sendMessage,
  sendBatch,
  create,
  reconnect,
};

module.exports = services;
