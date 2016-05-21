import { IDENTIFIER } from '../defines';

export const type = IDENTIFIER;

export function identifier(name) {
  return {
    code: IDENTIFIER,
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
