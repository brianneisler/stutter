import _ from 'lodash';

export default function get(value, path) {
  return _.get(value, path);
}
