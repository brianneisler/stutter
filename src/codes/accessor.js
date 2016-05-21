import _ from 'lodash';
import { ACCESSOR } from '../defines';

export const type = ACCESSOR;

export function accessor(path) {
  return {
    code: ACCESSOR,
    path
  };
}

export function generate(statement) {
  return accessor(statement);
}

export function evaluate(scope, name) {
  //TODO BRN
}
