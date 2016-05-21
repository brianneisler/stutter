import { STRING } from '../defines';

export const type = STRING;

export function string(value) {
  return {
    code: STRING,
    value
  };
}

export function generate(statement) {
  return string(statement.substr(1));
}
