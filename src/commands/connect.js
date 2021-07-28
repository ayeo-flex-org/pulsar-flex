const pulsarApi = require('./protocol/pulsar/pulsar_pb');
const constants = require('../config/constants');

const buildConnect = ({ protocolVersion, jwt }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.CONNECT);
  const commandConnect = new pulsarApi.CommandConnect()
    .setClientVersion(constants.general.CLIENT_VERSION)
    .setProtocolVersion(protocolVersion);

  jwt && commandConnect.setAuthMethodName('token').setAuthData(Buffer.from(jwt));

  return baseCommand.setConnect(commandConnect);
};

module.exports = buildConnect;
