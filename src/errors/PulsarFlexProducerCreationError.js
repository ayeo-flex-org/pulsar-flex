class PulsarFlexProducerCreationError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexProducerCreationError';
  }
}

module.exports = PulsarFlexProducerCreationError;
