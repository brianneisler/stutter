import * as _ from '../util';

export default function get(store) {
  return (key) => {
    return _.get(store, key);
  };
}
