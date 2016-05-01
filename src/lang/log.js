import _ from 'lodash';
import { METHODS } from '../defines';
import { expression } from '../core';
import { PROGRAM, logger } from '../log';

export function generate() {
  return expression([METHODS],
    (scope, tail, methods) => {
      const results = _.map(methods, (method) => {
        tail = method(scope, tail);
        return tail;
      });
      if (_.isEmpty(results)) {
        logger.info(PROGRAM, tail);
        return tail;
      } else {
        logger.info(PROGRAM, ...results);
      }
    });
}
