import * as _ from '../util';
import get from './get';
import map from './map';
import reduce from './reduce';

const registries = {};

export default function registry(name) {
  if (!_.has(registries, name)) {
    const store = {};
    _.set(registries, name, {
      get: get(store),
      map: map(store),
      reduce: reduce(store)
    });
  }
  return _.get(registries, name);
}
