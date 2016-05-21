export const EACH = 'EACH';

export function each(expressions, iteratee) {
  return {
    type: EACH,
    payload: {
      expressions,
      iteratee
    }
  };
}
