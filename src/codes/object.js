import { OBJECT } from '../defines';

export const type = OBJECT;

export function object(value) {
  return {
    code: OBJECT,
    value
  };
}

export function generate(statement) {
  return object(statement);
}
