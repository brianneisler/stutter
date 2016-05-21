import { NUMBER } from '../defines';

export const type = NUMBER;

export function number(value) {
  return {
    code: NUMBER,
    value
  };
}

export function generate(statement) {
  return number(statement);
}
