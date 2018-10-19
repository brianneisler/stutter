import * as _ from '../util';

export default function map(store) {
  return (values, iteratee) => {
    _.merge(store, _.reduce(values, iteratee, {}));
  };
}
