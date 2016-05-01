jest.unmock('../log');
jest.unmock('../../evaluate');

import { generate } from '../log';
import { isExpression } from '../../evaluate';
import { context, namespace, scope } from '../../core';
import { PROGRAM, INFO, logger } from '../../log';

const fixtures = {
  code: {
    ns: [
      'ns-name'
    ]
  },
  tail: 'tail',
  methods: [
    () => { return 'method1'; }
  ]
};

describe('log', () => {
  it('generates an expression', () => {
    const expression = generate(namespace(), context(), fixtures.code);
    expect(isExpression(expression)).toBeTruthy();
  });
  it('generates log expression', () => {
    const expression = generate(namespace(), context(), fixtures.code);
    expression.method(scope(), fixtures.tail, fixtures.methods);
    expect(logger.logs).toEqual([{ type: PROGRAM, level: INFO, logs: ['method1']}]);
    logger.clear();
  });
});
