import _ from 'lodash';

export default function isGenerator(obj) {
  return obj && obj.constructor && _.isString(obj.constructor.name) && obj.constructor.name.indexOf('GeneratorFunction') > -1;
}
