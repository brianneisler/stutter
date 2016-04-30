import _ from 'lodash';
import Immutable from 'immutable';
import * as lang from './lang';
import { identifier } from './core';
import { string } from './data';
import validate from './validate';

const generators = _.reduce(lang, (reduction, value, key) => {
  return _.set(reduction, key, value.generate);
}, {});

export default function generate(namespace, context, code) {
  const generatedCode = doGenerate(namespace, context, code);
  validate(generatedCode);
  return generatedCode;
}

function doGenerate(namespace, context, code) {
  if (isExpression(code)) {
    return generateExpression(namespace, context, code);
  } else if (isString(code)) {
    return generateString(namespace, context, code);
  } else if (isIdentifier(code)) {
    return generateIdentifier(namespace, context, code);
  } else if (_.isArray(code)) {
    return generateArray(namespace, context, code);
  } else {
    throw new Error(`Unknown value in code ${code}`);
  }
}

function generateArray(namespace, context, array) {
  return _.map(array, (code) => {
    return doGenerate(namespace, context, code);
  });
}

function generateExpression(namespace, context, expression) {
  const name = _.first(_.keys(expression));
  const generator = _.get(generators, name);
  const children = _.get(expression, name);
  return _.assign(generator(namespace, context, expression), {
    children: generateArray(namespace, context, children),
    meta: { ...expression._meta, name}
  });
}

function generateIdentifier(namespace, context, name) {
  return identifier(namespace, context, name);
}

function generateString(namespace, context, value) {
  return string(namespace, context, value);
}

function isExpression(code) {
  return _.isObject(code);
}

function isIdentifier(code) {
  return _.isString(code) && !isString(code);
}

function isString(code) {
  return _.isString(code) && _.startsWith(code, '"');
}
