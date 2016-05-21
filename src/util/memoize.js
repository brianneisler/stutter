import _ from 'lodash';

export default function memoize(func, resolver) {
  return _.memoize(func, resolver);
}
