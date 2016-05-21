import { ARRAY } from '../defines';
import { doGenerate } from '../generator';
import * as _ from '../util';

export const type = ARRAY;

export function array(value) {
  return {
    code: ARRAY,
    value
  };
}

export function generate(statement) {
  return array(_.map(statement, (child) => {
    return doGenerate(child);
  }));
}
