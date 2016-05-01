import _ from 'lodash';
import { IDENTIFIER, REST } from '../defines';
import { expression } from '../core';

export function generate(namespace, context) {
  return expression([IDENTIFIER, REST],
    (scope, tail, identifier, rest) => {
      rest(scope, tail);
      _.set(namespace, identifier.name, context);
      return context;
    });
}
