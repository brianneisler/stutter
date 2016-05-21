import * as _ from '../util';
import { expression } from '../code';
import { EXPRESSIONS, IDENTIFIER } from '../defines';
import { each, resolve } from '../runtime';

export function generate() {
  return expression([IDENTIFIER, EXPRESSIONS], ns);
}

function *ns(scope, tail, identifier, expressions) {
  yield each(expressions, eachNs);
  _.set(this.namespace, identifier.name, this.context);
}

function *eachNs(scope, tail, expression) {
  return yield resolve(expression);
}
