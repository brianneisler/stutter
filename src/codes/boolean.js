import { BOOLEAN } from '../defines';

export const type = BOOLEAN;

export function boolean(value) {
  return {
    code: BOOLEAN,
    value
  };
}

export function generate(statement) {
  return boolean(statement);
}
