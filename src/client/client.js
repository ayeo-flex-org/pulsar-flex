const pulsarApi = require('../protocol/pulsar/pulsar_pb')


const client = {
  connect: ({ brokers }) => {
    const commandConnect = new pulsarApi.CommandConnect()

    console.log(commandConnect.toObject())
  },
  disconnect: () => {
  },
  sendProtoCommand: ({command, props}) => {
  },
}

module.exports = client;