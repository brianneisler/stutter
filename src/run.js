import _ from 'lodash';
import { context, namespace, scope } from './core';
import generate from './generate';
import { loadFile } from './loader';
import parse from './parse';
import evaluate from './evaluate';

export default async function run(path) {
  const data = await loadFile(path);
  const parsedCode = parse(data, path);
  const generatedCode = generate(namespace(), context(), parsedCode);
  const func = evaluate(generatedCode);
  return func(scope());
}
