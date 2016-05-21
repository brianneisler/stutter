import { IDENTIFIER } from '../defines';

export function generate(expression) {
  return {
    expect: [IDENTIFIER],
    method: function(scope, identifier) {
      context = context.setIn(name, {});
      return {
        context,
        scope
      };
    }
  }
}
