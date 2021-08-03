const consumerStates = {
  ACTIVE: 0, // Subscribed and consuming messages
  INACTIVE: 1, // Subscribed but not consuming messages
  UNSUBSCRIBED: 2, // Not subscribed
  ERROR: 3, // ???
};

module.exports = consumerStates;
