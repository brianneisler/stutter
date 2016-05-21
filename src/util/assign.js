import _ from 'lodash';

export default function assign(value, ...sources) {
  return _.assign(value, ...sources);
}
