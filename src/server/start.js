import child_process from 'child_process';
import config from '../../config/config.json';
import path from 'path';
import Promise from 'bluebird';
import { connect, generateSocket, tryConnect, waitTillConnect } from '../client';
import { COMMAND, logger } from '../log';
import stopServer from './stopServer';

const spawn = child_process.spawn;

export default async function start(options) {
  let socket = generateSocket(config.local);
  const result = await tryConnect(socket);
  if (!result) {
    await runServerAndWait(options, socket);
  }
}

async function runServerAndWait(options, socket) {
  startServer(options);
  await waitTillConnect(socket);
  await waitTillSigint();
  await stopServer();
}

async function waitTillSigint() {
  return new Promise((resolve) => {
    process.once('SIGINT', () => {
      resolve();
    });
  });
}

function startServer(options) {
  logger.info(COMMAND, `Attempting to start server...`);
  const config =  {
    cwd: process.cwd(),
    env: process.env,
    gid: process.getgid(),
    uid: process.getuid()
  }
  config.env.NODE_ENV = 'development';
  const bin = path.resolve(__dirname, '..', '..', 'node_modules', 'stutter-server', 'bin', 'stutter-server');
  if (options.daemon) {
    const child = spawn(bin, ['run'], {
      ...config,
      detached: true,
      stdio: ['ignore']
    });
    child.unref();
  } else {
    const child = spawn(bin, ['run'], config);
    child.stdout.on('data', (data) => {
      console.log(`${data}`);
    });
    child.stderr.on('data', (data) => {
      console.log(`${data}`);
    });
  }
}
