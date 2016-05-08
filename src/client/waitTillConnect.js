import Promise from 'bluebird';
import { COMMAND, logger } from '../log';

export default function waitTillConnect(socket) {
  return new Promise((resolve, reject) => {
    if (socket.connected) {
      return resolve(socket);
    }
    socket.io.on('connect_error', () => {
      logger.info(COMMAND, `Could not connect to server. Will retry...`);
    });
    socket.on('connect', () => {
      logger.info(COMMAND, `Connected to server...`);
      resolve(socket);
    });
  });
}
