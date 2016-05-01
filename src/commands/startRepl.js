import { start } from '../repl';
import { COMMAND, logger } from '../log';

export default async function startRepl(file, options) {
  logger.info(COMMAND, 'starting REPL...');
  try {
    await start(file);
  } catch(throwable) {
    logger.error(COMMAND, throwable);
    logger.debug(COMMAND, throwable.stack);
  }
}
