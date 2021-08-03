class PulsarFlexConsumerCloseError extends Error {
  constructor({ message = 'The consumer was closed' }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexConsumerCloseError';
  }
}

module.exports = PulsarFlexConsumerCloseError;
