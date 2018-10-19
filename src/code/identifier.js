import { IDENTIFIER } from '../defines';
import * as _ from '../util';

export const code = IDENTIFIER;

export function identifier(name) {
  return {
    code,
    name
  };
}

export function generate(statement) {
  return identifier(statement);
}

export function evaluate(scope, name) {
  if (!scope.hasIn(name)) {
    throw new Error(`${name} is not defined`);
  }
  return scope.getIn(name);
}
