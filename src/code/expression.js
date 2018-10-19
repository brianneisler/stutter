import { EXPRESSION } from '../defines';
import { doGenerate, generateExpression } from '../generator';
import * as _ from '../util';

export const code = EXPRESSION;

export default function expression(lang, expectations, meta) {
  return {
    code,
    lang,
    meta,
    expectations
  };
}

export function generate(statement) {
  return generateExpression(statement);
}
