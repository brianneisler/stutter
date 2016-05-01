import _ from 'lodash';
import Immutable from 'immutable';
import { METHODS } from '../defines';
import { expression } from '../core';
import { string } from '../data'

export function generate(namespace, context, code) {
  return expression([METHODS],
    (scope, tail, methods) => {
      const results = _.map(methods, (method) => {
        tail = _.toString(method(scope, tail));
        return tail;
      });
      if (_.isEmpty(results)) {
        return _.toString(tail);
      } else {
        return _.join(results);
      }
    });
}
