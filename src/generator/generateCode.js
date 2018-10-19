import * as codes from '../code';
import * as langs from '../lang';
import { registry } from '../registry';
import * as _ from '../util';
import doGenerate from './doGenerate';

const codeRegistry      = registry('code');
const langRegistry      = registry('lang');
const keywordRegistry   = registry('keyword');

export default function generateCode(statement) {
  codeRegistry.map(codes, 'code');
  langRegistry.map(langs, 'lang');
  keywordRegistry.reduce(langs, (reduction, lang) => {
    _.each(lang.keywords, (keyword) => {
      reduction = _.set(reduction, keyword, lang);
    });
    return reduction;
  });
  return doGenerate(statement);
}
