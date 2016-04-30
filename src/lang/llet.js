import _ from 'lodash';
import Immutable from 'immutable';

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
