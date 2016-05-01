import { start } from '../server';
import { COMMAND, logger } from '../log';

export default async function startServer(options) {
  logger.info(COMMAND, 'checking if stutter server is running...');
  const state = await start();
  if (state.running) {

  }
}
