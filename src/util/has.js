import _ from 'lodash';

export default function has(value, path) {
  return _.has(value, path);
}
