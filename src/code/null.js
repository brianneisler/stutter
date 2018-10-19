import { NULL } from '../defines';
import * as _ from '../util';

export const code = NULL;

export function _null() {
  return {
    code
  };
}

export function generate(statement) {
  return _null(statement);
}

export function evaluate(scope, name) {
  //TODO BRN
}

export function match(statement) {
  return isNullStatement(statement) ? NULL : null;
}

function isNullStatement(statement) {
  return _.isNull(statement);
}
