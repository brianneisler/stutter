import { ACCESSOR } from '../defines';
import * as _ from '../util';

export const code = ACCESSOR;

export function accessor(path) {
  return {
    code,
    path
  };
}

export function generate(statement) {
  return accessor(statement.substr(1));
}

export function evaluate(scope, name) {
  //TODO BRN
}

export function match(statement) {
  return isAccessorStatement(statement) ? ACCESSOR : null;
}

function isAccessorStatement(statement) {
  return _.isString(statement) && _.startsWith(statement, '.');
}
