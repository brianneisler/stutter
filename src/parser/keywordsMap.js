import * as _ from '../util';
import keyword from './keyword';
import proxyKeyword from './proxyKeyword';
import * as lang from '../lang';

const keywordsMap = _.reduce(lang, (reduction, value, key) => {
  return _.set(reduction, key, proxyKeyword(keyword(key)));
}, {});

export default keywordsMap;
