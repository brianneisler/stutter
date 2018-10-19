import { expression } from '../code';
import * from '../defines';
import { registry } from '../registry';
import * as _ from '../util';

const codeRegistry      = registry('code');
const langRegistry      = registry('lang');
const keywordRegistry   = registry('keyword');

export default function generateExpression(statement) {
  const key         = _.get(statement, '@key');
  const children    = _.get(statement, '@children');
  const lang        = keywordRegistry.get(key);
  return expression(
    lang.lang,
    generateExpectations(lang.expects, children),
    { ...statement._meta, key }
  );
}

function generateExpectations(expects, children) {
  let childIndex = -1;
  return _.map(expects, (expect) => {
    if (expect === ANY) {
      childIndex++;
      return doGenerate(_.get(children, childIndex));
    } else if (expect === EXPRESSIONS) {
      return _.map(_.slice(children, childIndex + 1), (child) => {
        return doGenerate(child);
      });
    } else {
      childIndex++;
      return expectCode(_.get(children, childIndex), expect);
    }
  });
}

function expectCode(statement, expect) {
  const code = codeRegistry.get(expect);
  if (!code) {
    throw new Error(`I found and unknown expected code ${expect}`);
  }
  if (!code.is(statement)) {
    
  }
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
