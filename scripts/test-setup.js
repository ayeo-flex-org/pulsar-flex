const { exec } = require('child_process');
const { promisify } = require('util');
const asyncExec = promisify(exec);
const path = require('path');

const [nodeExePath, executedFilePath, version, standaloneWaitTime] = process.argv;

console.log(`Setting up environment using JWT and pulsar standalone version ${version} for tests`);

(async () => {
  try {
    await asyncExec('docker --help');
  } catch (e) {
    console.log('Docker must be installed on the running host');
    process.exit(1);
  }

  const containerName = 'pulsar-standalone-pulsar-flex';
  try {
    console.log('Removing old deployments..');
    await asyncExec(`docker rm ${containerName} -f`);
    console.log(`Successfully found and removed docker with name ${containerName}`);
  } catch (e) {
    console.log(`Did not find docker with name ${containerName}`);
  }

  const dockerComposeFilePath = path.join(
    __dirname,
    `docker`,
    `pulsar-jwt`,
    version,
    `docker-compose.yml`
  );

  console.log(`Creating pulsar via docker-compose from path ${dockerComposeFilePath}`);

  asyncExec(`docker compose -f ${dockerComposeFilePath} up --build`)
    .then(() => console.log('docker compose gracefully shut down'))
    .catch((e) => console.log(`docker compose killed ${e}`));

  console.log(
    `Waiting ${standaloneWaitTime}ms for pulsar-standalone to start before creating configurations`
  );

  await new Promise((resolve) => setTimeout(resolve, parseInt(standaloneWaitTime)));

  console.log(`Validating pulsar is up still up after waiting`);

  const { stdout } = await asyncExec(`docker ps`);

  if (!stdout.includes(containerName)) {
    throw new Error(
      containerName +
        'has been closed, tests setup aborted - maybe try to increase wait standaloneWaitTime'
    );
  } else {
    console.log(`Found a running pulsar container, continuing`);
  }

  console.log('Creating test topic "public/default/test"');
  await asyncExec(
    `docker exec ${containerName} /pulsar/bin/pulsar-admin topics create public/default/test`
  );
  console.log('Creating "subscription" subscription');

  await asyncExec(
    `docker exec ${containerName} /pulsar/bin/pulsar-admin topics create-subscription -s subscription public/default/test`
  );

  console.log('You can run your tests now!');
  process.exit(0);
})();
