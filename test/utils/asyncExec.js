const { exec } = require('child_process');
const { promisify } = require('util');
const asyncExec = promisify(exec);

module.exports = asyncExec;
