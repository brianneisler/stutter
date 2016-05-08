import Promise from 'bluebird';
import config from '../../config/config.json';
import { connect, generateSocket } from '../client';
import { COMMAND, logger } from '../log';

export default function stopServer() {
  logger.info(COMMAND, 'Stopping server...');
  return new Promise((resolve) => {
    const socket = generateSocket(config.local);
    socket.on('STOP_ACK', () => {
      logger.info(COMMAND, 'Stop ack received');
      resolve();
    });
    socket.emit('STOP');
});
}
