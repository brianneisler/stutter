import _ from 'lodash';
import vm from 'vm';
import fs from 'fs';
import evalInContext from '../eval/eval';

export default function parse(path, keywords) {
  const data = fs.readFileSync(path, 'utf8');
  //const result = vm.runInNewContext(data, keywords, path);
  return evalInContext(data, keywords, path);
}
