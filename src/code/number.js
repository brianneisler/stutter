import { NUMBER } from '../defines';
import * as _ from '../util';

export const code = NUMBER;

export function number(value) {
  return {
    code,
    value
  };
}

export function generate(statement) {
  return number(statement);
}
