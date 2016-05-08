import { run } from '../';
import { COMMAND, logger } from 'stutter-util';

export default async function runProgram(file, options) {
  try {
    await run(file);
  } catch(throwable) {
    logger.error(COMMAND, throwable);
    logger.debug(COMMAND, throwable.stack);
  }
}
