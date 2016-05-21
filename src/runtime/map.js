export const MAP = 'MAP';

export function each(expressions, iteratee) {
  return {
    type: MAP,
    payload: {
      expressions,
      iteratee
    }
  };
}
