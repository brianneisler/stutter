import { PROGRAM, logger } from 'stutter-util';
import { expression } from '../codes';
import { EXPRESSIONS, LOG } from '../defines';
import { map, resolve } from '../runtime';
import * as _ from '../util';

export const lang       = LOG;
export const keywords   = ['log'];
export const expects    = [EXPRESSIONS];

export function *evaluate(scope, tail, expressions) {
  const results = yield map(expressions, mapLog);
  if (_.isEmpty(results)) {
    logger.info(PROGRAM, tail);
    return tail;
  } else {
    logger.info(PROGRAM, ...results);
  }
}

function *mapLog(scope, tail, expression) {
  return yield resolve(expression);
}
