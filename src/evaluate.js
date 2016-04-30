import _ from 'lodash';
import { ANY, EXPRESSION, IDENTIFIER, METHODS, REST, STRING } from './defines';

export default function evaluate(generatedCode) {
  return doEvaluate(generatedCode);
}

function doEvaluate(code) {
  if (isExpression(code)) {
    return evaluateExpression(code);
  } else if (isIdentifier(code)) {
    return evaluateIdentifier(code);
  } else if (isString(code)) {
    return evaluateString(code);
  }
}

function evaluateExpression(expression) {
  const { children, expect, method } = expression;
  const expectations = evaluateExpectations(expect, children);
  return (scope, tail) => {
    return method(scope, tail, ...expectations);
  };
}

function evaluateExpectations(expects, children) {
  let childIndex = -1;
  return _.map(expects, (expect) => {
    if (expect === ANY) {
      childIndex++;
      return doEvaluate(_.get(children, childIndex));
    } else if (expect === EXPRESSION) {
      childIndex++;
      return expectExpression(_.get(children, childIndex));
    } else if (expect === IDENTIFIER) {
      childIndex++;
      return expectIdentifier(_.get(children, childIndex));
    } else if (expect === METHODS) {
      return _.map(_.slice(children, childIndex + 1), (child) => {
        return doEvaluate(child);
      });
    } else if (expect === REST) {
      const methods = _.map(_.slice(children, childIndex + 1), (child) => {
        return doEvaluate(child);
      });
      return (scope, tail) => {
        _.each(methods, (method) => {
          tail = method(scope, tail);
        });
        return tail;
      };
    } else if (expect === STRING) {
      childIndex++;
      return expectString(_.get(children, childIndex));
    }
  });
}

function evaluateIdentifier(identifier) {
  return _.get(identifier, 'method');
}

function evaluateString(string) {
  return _.get(string, 'method');
}

function expectExpression(code) {
  if (!isExpression(code)) {
    throw new Error(`Expected an expression, instead I found ${code}`);
  }
  return evaluateExpression(code);
}

function expectIdentifier(code) {
  if (!isIdentifier(code)) {
    throw new Error(`Expected an identifier, instead I found ${code}`);
  }
  return evaluateIdentifier(code);
}

function expectString(code) {
  if (!isString(code)) {
    throw new Error(`Expected a string, instead I found ${code}`);
  }
  return evaluateString(code);
}

function isExpression(code) {
  return _.isObject(code) && code.type === EXPRESSION;
}

function isIdentifier(code) {
  return _.isObject(code) && code.type === IDENTIFIER;
}

function isString(code) {
  return _.isObject(code) && code.type === STRING;
}
