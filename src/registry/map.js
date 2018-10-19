import * as _ from '../util';

export default function map(store) {
  return (values, name) => {
    _.merge(store, _.reduce(values, (reduction, value) => {
      return _.set(reduction, value[name], value);
    }, {}));
  };
}
