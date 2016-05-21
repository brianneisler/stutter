export const SET = 'SET';

export function resolve(name, value) {
  return {
    type: SET,
    payload: {
      name,
      value
    }
  };
}
