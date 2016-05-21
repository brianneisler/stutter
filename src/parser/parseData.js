import keywordsMap from './keywordsMap';
import evalInContext from '../../eval/eval';

export default function parseData(data, path) {
  return evalInContext(data, keywordsMap, path);
}
