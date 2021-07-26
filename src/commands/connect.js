const pulsarApi = require('./protocol/pulsar/pulsar_pb');
const constants = require('../config/constants');

const buildConnect = ({ protocolVersion, jwt }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.CONNECT);

  return baseCommand.setConnect(
    new pulsarApi.CommandConnect()
      .setClientVersion(constants.CLIENT_VERSION)
      .setAuthMethodName('token')
      .setAuthData(Buffer.from(jwt))
      .setProtocolVersion(protocolVersion)
  );
};

module.exports = buildConnect;
