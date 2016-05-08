import { start } from '../server';
import { COMMAND, logger } from 'stutter-util';

export default async function startServer(options) {
  logger.info(COMMAND, 'checking if stutter server is running...');
  try {
    await start(options);
  } catch(throwable) {
    logger.debug(COMMAND, throwable.stack);
  }
}
