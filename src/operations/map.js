import { MAP } from '../defines';

export function each(expressions, iteratee) {
  return {
    op: MAP,
    payload: {
      expressions,
      iteratee
    }
  };
}
