import { PROGRAM, logger } from 'stutter-util';
import { expression } from '../codes';
import { EXPRESSIONS } from '../defines';
import { map, resolve } from '../runtime';
import * as _ from '../util';

export function generate() {
  return expression([EXPRESSIONS], log);
}

function *log(scope, tail, expressions) {
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
