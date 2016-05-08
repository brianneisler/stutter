import _ from 'lodash';
import { context, namespace, scope } from '../core';
import evaluate from '../evaluate';
import generate from '../generate';
import { REPL, logger } from 'stutter-util';
import parse from '../parse';
import { prompt } from '../util';

export default async function start(file) {
  let done = false;
  const _namespace = namespace();
  const _context = context();
  while (!done) {
    const schema = {
      properties: {
        code: {
          description: '>'
        }
      }
    };
    const result = await prompt(schema);
    if (result.code !== 'exit') {
      const parsedCode = parse(result.code, '');
      const generatedCode = generate(_namespace, _context, parsedCode);
      const func = evaluate(generatedCode);
      logger.info(REPL, func(scope()));
    } else {
      done = true;
    }
  }
}
