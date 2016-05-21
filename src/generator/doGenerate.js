import * from '../defines';
import * as _ from '../util';
import * as registry from './registry';

export default function doGenerate(statement) {
  const generator = registry.get(statementType(statement));
  return generator.generate(statement);
}

function isAccessorStatement(statement) {
  return isStirng(statement) && _.startsWith(statement, '.');
}

function isArrayStatement(statement) {
  return isArray(statement);
}

function isBooleanStatement(statement) {
  return isBoolean(statement);
}

function isExpressionStatement(statement) {
  return isObject(statement) && _.has(statement, '@key');
}

function isIdentifierStatement(statement) {
  return isString(statement) && !isStringCode(statement);
}

function isNumberStatement(statement) {
  return isNumber(statement);
}

function isObjectStatement(statement) {
  return isObject(statement) && !isExpressionStatement(statement);
}

function isStringStatement(statement) {
  return isString(statement) && _.startsWith(statement, '"');
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
