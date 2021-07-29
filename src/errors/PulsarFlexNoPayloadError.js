class PulsarFlexProducerNoPayloadError extends Error {
  constructor() {
    super();
    this.message = 'Missing payload, you must supply a payload for the produce to succeed.';
    this.name = 'PulsarFlexProducerNoPayloadError';
  }
}

module.exports = PulsarFlexProducerNoPayloadError;
