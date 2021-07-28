const sendMessage = require('./sendMessage');
const sendBatch = require('./sendBatch');
const close = require('./close');
const create = require('./create');

const services = {
  close,
  sendMessage,
  sendBatch,
  create,
};

module.exports = services;
