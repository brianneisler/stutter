import { loadFile } from '../loader';
import { parse } from '../';
import { COMMAND, logger } from 'stutter-util';

export default async function parseFile(file, options) {
  try {
    const data = await loadFile(file);
    const statement   = parse(data, path);
    logger.info(COMMAND, JSON.stringify(statement));
  } catch(throwable) {
    logger.error(COMMAND, throwable);
    logger.debug(COMMAND, throwable.stack);
  }
}
