import _ from 'lodash';
import keywordsMap from './keywordsMap';

export default function isKeyword(name) {
  return _.has(keywordsMap, name);
}
