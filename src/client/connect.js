import Promise from 'bluebird';
import { COMMAND, logger } from '../log';

export default async function connect(socket) {
  return new Promise((resolve, reject) => {
    if (socket.connected) {
      return resolve(socket);
    }
    socket.io.once('connect_error', (data) => {
      reject(data);
    });
    socket.once('connect', () => {
      resolve(socket);
    });
  });
}
