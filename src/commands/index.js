const connect = require('./connect');
const pong = require('./pong');
const ping = require('./ping');
const createProducer = require('./createProducer');
const closeProducer = require('./closeProducer');
const sendMessages = require('./sendMessages');
const messageMetadata = require('./messageMetadata');
const singleMessageMetadata = require('./singleMessageMetadata');

module.exports = {
  connect,
  pong,
  ping,
  createProducer,
  closeProducer,
  sendMessages,
  messageMetadata,
  singleMessageMetadata,
};
