class PulsarFlexTopicLookupError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexTopicLookupError';
  }
}

module.exports = PulsarFlexTopicLookupError;
