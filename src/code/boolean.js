import { BOOLEAN } from '../defines';
import * as _ from '../util';

export const code = BOOLEAN;

export function boolean(value) {
  return {
    code,
    value
  };
}

export function generate(statement) {
  return boolean(statement);
}
