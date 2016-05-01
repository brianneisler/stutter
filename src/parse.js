import _ from 'lodash';
import vm from 'vm';
import { keyword } from './core';
import * as lang from './lang';
import evalInContext from '../eval/eval';

const keywords = _.reduce(lang, (reduction, value, key) => {
  return _.set(reduction, key, keyword(key));
}, {});

export default function parse(data, path) {
  //const result = vm.runInNewContext(data, keywords, path);
  return evalInContext(data, keywords, path);
}
