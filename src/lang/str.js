import _ from 'lodash';
import Immutable from 'immutable';
import { ANY } from '../defines';
import { expression } from '../core';

export function generate(namespace, context, code) {
  return expression([ANY],
    (scope, tail, string) => {
      tail = _.isFunction(string) ? string(scope, tail) : string;
      return _.toString(tail);
    });
}
