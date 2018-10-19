import Immutable from 'immutable';
import { expression } from '../core';
import { string } from '../data';
import { EXPRESSIONS, STRING } from '../defines';
import { map, resolve } from '../runtime';
import * as _ from '../util';

export const lang = STRING;
export const keywords = {
  str: lang
};

export function generate(namespace, context, code) {
  return expression([EXPRESSIONS], str);
}

function *str(scope, tail, expressions) {
  const results = yield map(expressions, mapString);
  if (_.isEmpty(results)) {
    return _.toString(tail);
  }
  return _.join(results);
}

function *mapString(scope, tail, value) {
  return _.toString(yield resolve(expression));
}
