import * from '../defines';
import { registry } from '../registry';
import * as _ from '../util';

const codeRegistry = registry('code');

export default function doGenerate(statement) {
  const generator = codeRegistry.get(statementType(statement));
  return generator.generate(statement);
}




function isBooleanStatement(statement) {
  return _.isBoolean(statement);
}

function isExpressionStatement(statement) {
  return _.isObject(statement) && _.has(statement, '@key');
}

function isIdentifierStatement(statement) {
  return _.isString(statement) && !isStringCode(statement);
}

function isNumberStatement(statement) {
  return _.sNumber(statement);
}

function isObjectStatement(statement) {
  return _.isObject(statement) && !isExpressionStatement(statement);
}

function isStringStatement(statement) {
  return _.isString(statement) && _.startsWith(statement, '"');
}

function statementType(statement) {
  if (isExpressionStatement(statement)) {
    return EXPRESSION;
  } else if (isNumberStatement(statement)) {
    return NUMBER;
  } else if (isStringStatement(statement)) {
    return STRING;
  } else if (isIdentifierStatement(statement)) {
    return IDENTIFIER;
  } else if (isArrayStatement(statement)) {
    return ARRAY;
  } else if (isObjectStatement(statement)) {
    return OBJECT;
  } else if (isBooleanStatement(statement)) {
    return BOOLEAN;
  } else if (isAccessorStatement(statement)) {
    return ACCESSOR;
  } else {
    throw new Error('Unknown statement type', statement);
  }
}
