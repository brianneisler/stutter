import { STRING } from '../defines';

export const code = STRING;

export function string(value) {
  return {
    code,
    value
  };
}

export function generate(statement) {
  return string(statement.substr(1));
}
