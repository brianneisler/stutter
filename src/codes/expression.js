import { EXPRESSION } from '../defines';
import * as lang from '../lang';

const langGenerators = _.reduce(lang, (reduction, value, key) => {
  return _.set(reduction, key, value.generate);
}, {});

export const type = EXPRESSION;

export default function expression(expect, type) {
  return {
    code: EXPRESSION,
    expect,
    evaluator
  };
}

export function generate(statement) {
  return expression(statement);
}



function generateExpression(code) {
  const name        = _.first(_.keys(code));
  const generator   = _.get(generators, name);
  const children    = _.get(code, name);
  const expression  = generator(code)
  return _.assign(expression, {
    expectations: generateExpectations(expression.expects, children),
    meta: { ...expression._meta, name }
  });
}

function generateExpectations(expects, children) {
  let childIndex = -1;
  return _.map(expects, (expect) => {
    if (expect === ANY) {
      childIndex++;
      return doGenerate(_.get(children, childIndex));
    } else if (expect === EXPRESSION) {
      childIndex++;
      return expectExpression(_.get(children, childIndex));
    } else if (expect === EXPRESSIONS) {
      return _.map(_.slice(children, childIndex + 1), (child) => {
        return doGenerate(child);
      });
    } else if (expect === IDENTIFIER) {
      childIndex++;
      return expectIdentifier(_.get(children, childIndex));
    } else if (expect === STRING) {
      childIndex++;
      return expectString(_.get(children, childIndex));
    }
  });
}

function expectExpression(code) {
  if (!isExpressionCode(code)) {
    throw new Error(`Expected an expression, instead I found ${code}`);
  }
  return generateExpression(code);
}

function expectIdentifier(code) {
  if (!isIdentifierCode(code)) {
    throw new Error(`Expected an identifier, instead I found ${code}`);
  }
  return generateIdentifier(code);
}

function expectString(code) {
  if (!isStringCode(code)) {
    throw new Error(`Expected a string, instead I found ${code}`);
  }
  return generateString(code);
}

function generateIdentifier(name) {
  return identifier(name);
}

function generateString(value) {
  return string.generate(value);
}
