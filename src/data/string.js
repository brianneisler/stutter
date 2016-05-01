import { STRING } from '../defines';

export function string(value) {
  return {
    type: STRING,
    value,
    method: () => value
  };
}

export function generate(namespace, context, code) {
  return string(code.substr(1));
}
