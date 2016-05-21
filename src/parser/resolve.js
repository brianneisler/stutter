import * as _ from '../util';

export default function resolve(data) {
  return _.map(data, (value) => {
    if (_.isFunction(value)) {
      return value();
    }
    return value;
  });
}
