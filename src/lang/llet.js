import { LET } from '../defines';
import * as _ from '../util';

export const lang = LET;
export const keywords = {
  llet: lang
};

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
