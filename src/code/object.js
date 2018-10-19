import { OBJECT } from '../defines';

export const code = OBJECT;

export function object(value) {
  return {
    code,
    value
  };
}

export function generate(statement) {
  return object(statement);
}
