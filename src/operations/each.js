import { EACH } from '../defines';

export function each(expressions, iteratee) {
  return {
    op: EACH,
    payload: {
      expressions,
      iteratee
    }
  };
}
