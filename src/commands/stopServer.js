import { stop } from '../server';
import { COMMAND, logger } from 'stutter-util';

export default async function stopServer(option) {
  logger.info(COMMAND, 'attempting to stop stutter server...');
  const state = await stop();
  if (state.running) {

  }
}
