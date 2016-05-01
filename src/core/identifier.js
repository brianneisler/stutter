import _ from 'lodash';
import { IDENTIFIER } from '../defines';

export default function identifier(namespace, context, name) {
  return {
    type: IDENTIFIER,
    name,
    method: (scope, tail, value) => {
      if (!_.isUndefined(value)) {
        if (scope.hasIn(name)) {
          throw new Error(`${name} is already declared in scope`);
        }
        return scope.setIn(name, value);
      }
      if (!scope.hasIn(name)) {
        throw new Error(`${name} is not defined`);
      }
      return scope.getIn(name);
    }
  };
}
