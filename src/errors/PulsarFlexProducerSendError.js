class PulsarFlexProducerSendError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexProducerSendError';
  }
}

module.exports = PulsarFlexProducerSendError;
