import { ANY, EXPRESSION, EXPRESSIONS, IDENTIFIER, STRING } from './defines';
import { CALL, EACH, MAP, RESOLVE, SET } from './runtime';
import { isArray, isGenerator, isObject } from './util';

const commandMap = {
  [CALL]: callCommand,
  [EACH]: eachCommand,
  [MAP]: mapCommand,
  [RESOLVE]: resolveCommand,
  [SET]: setCommand
};

export default function evaluateCode(context, namespace, scope, tail, code) {
  if (isExpressionCode(code)) {
    return evaluateExpression(context, namespace, scope, tail, code);
  } else if (isIdentifierCode(code)) {
    return evaluateIdentifier(scope, code);
  } else if (isStringCode(code)) {
    return evaluateString(code);
  } else {
    throw new Error('Unidentified code', code);
  }
}

function evaluateExpression(context, namespace, scope, tail, expression) {
  let done = false;
  let value;
  let result;
  let next;
  const { evaluator, expectations } = expression;
  const iter = evaluator.apply({ context, namespace }, [scope, tail, ...expectations]);
  while (!done) {
    { done, value } = iter.next(next);
    if (done) {
      result = value;
    } else if (isCommand(value)) {
      next = runCommand(context, namespace, scope, tail, value);
    }
  }
  return result;
}

function runCommand(context, namespace, scope, tail, command) {
  const commandEvaluator = commandMap[command.type];
  return commandEvaluator(context, namespace, scope, tail, command.payload);
}

function callCommand() {
  //TODO
}

function eachCommand() {
  //TODO
}

function mapCommand(context, namespace, scope, tail, {expressions, iteratee}) {
  const values = [];
  iterate(expressions, (value) => {
    values.push(iteratee(value));
  });
  return values;
}

function resolveCommand(context, namespace, scope, tail, {value}) {
  return resolve(context, namespace, scope, tail, value);
}

function setCommand() {
  //TODO
}

function resolve(context, namespace, scope, tail, value) {
  if (isCode(value)) {
    return evaluateCode(context, namespace, scope, tail, value);
  }
}

function iterator(collection) {
  if (isArray(collection)) {
    return collection[Symbol.iterator]();
  } else if (isGenerator(collection)) {
    return collection();
  } else if (isObject(collection)) {
    return objectIterator(collection);
  } else {
    return emptyIterator();
  }
}

function *objectIterator(object) {
  const _keys = keys(object);

}

function keys(collection) {

}

function *emptyIterator() {}


function iterate(collection, iteratee) {
  const iter = iterator(collection);
  let done = false;
  while (!done) {
    const next = iter.next();
    done = next.done;
    if (!done) {
      const result = iteratee(next.value);
      if (result === false) {
        done = true;
      }
    }
  }
}

function evaluateIdentifier(scope, identifier) {
  return identifier.evaluator(scope, identifier.name);
}

function evaluateString(string) {
  return string.value;
}

function setScope(scope, name, value) {
  if (scope.hasIn(name)) {
    throw new Error(`${name} is already declared in scope`);
  }
  return scope.setIn(name, value);
}

export function isExpressionCode(code) {
  return isObject(code) && code.code === EXPRESSION;
}

export function isIdentifierCode(code) {
  return isObject(code) && code.code === IDENTIFIER;
}

export function isStringCode(code) {
  return isObject(code) && code.code === STRING;
}

function isCommand(value) {
  return isObject(vlaue) && isString(value.cmd);
}
