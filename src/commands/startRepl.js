import { start } from '../repl';
import { COMMAND, logger } from 'stutter-util';

export default async function startRepl(file, options) {
  logger.info(COMMAND, 'starting REPL...');
  try {
    await start(file);
  } catch(throwable) {
    logger.debug(COMMAND, throwable.stack);
  }
}
