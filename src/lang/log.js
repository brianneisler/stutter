import _ from 'lodash';
import { METHODS } from '../defines';
import { expression } from '../core';
import { logger } from '../log';

export function generate() {
  return expression([METHODS],
    (scope, tail, methods) => {
      const results = _.map(methods, (method) => {
        tail = method(scope, tail);
        return tail;
      });
      if (_.isEmpty(results)) {
        logger.log(tail);
        return tail;
      } else {
        logger.log(...results);
      }
    });
}
