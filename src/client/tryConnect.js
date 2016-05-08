import connect from './connect';
import Promise from 'bluebird';
import { COMMAND, logger } from '../log';
import config from '../../config/config.json';

export default async function tryConnect(socket) {
  try {
    logger.info(COMMAND, `Attempting to connect to server at ${config.local}...`);
    await connect(socket);
    return true;
  } catch(error) {
    logger.info(COMMAND, `No server found at ${config.local}...`);
    logger.info(COMMAND, error);
    if (error.type === 'TransportError' && error.description === 503) {
      return false;
    }
    throw error;
  }
}
