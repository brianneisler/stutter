import { ARRAY } from '../defines';
import { doGenerate } from '../generator';
import * as _ from '../util';

export const code = ARRAY;

export function array(value) {
  return {
    code,
    value
  };
}

export function generate(statement) {
  return array(_.map(statement, (child) => {
    return doGenerate(child);
  }));
}

export function match(statement) {
  return isArrayStatement(statement) ? ARRAY : null;
}

function isArrayStatement(statement) {
  return _.isArray(statement);
}
