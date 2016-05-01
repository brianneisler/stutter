import { run } from '../';
import { COMMAND, logger } from '../log';

export default async function runProgram(file, options) {
  try {
    await run(file);
  } catch(throwable) {
    logger.error(COMMAND, throwable);
    logger.debug(COMMAND, throwable.stack);
  }
}
