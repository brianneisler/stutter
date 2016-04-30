import _ from 'lodash';
import * as lang from './lang';
import { context, keyword, namespace, scope } from './core';
import generate from './generate';
import parse from './parse';
import evaluate from './evaluate';

export default function run(path, options) {
  const keywords = _.reduce(lang, (reduction, value, key) => {
    return _.set(reduction, key, keyword(key));
  }, {});
  const parsedCode = parse(path, keywords);
  const generatedCode = generate(namespace(), context(), parsedCode);
  const func = evaluate(generatedCode);
  return func(scope());
}
