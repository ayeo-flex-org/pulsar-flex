class PulsarFlexBrokerTimeoutError extends Error {
  constructor({ host, port }) {
    super();
    this.message = `Timed out while waiting for command connect to host: ${host} port:${port}`;
    this.name = 'PulsarFlexBrokerTimeoutError';
  }
}

module.exports = PulsarFlexBrokerTimeoutError;
