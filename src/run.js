import _ from 'lodash';
import vm from 'vm';
import fs from 'fs';
import * as lang from './lang';
import { expression } from './core';

export function run(path, options) {
  const context = _.reduce(lang, (reduction, value, key) => {
    return _.set(reduction, key, expression(key));
  }, {});
  const code = parse(path, context);
  const func = interpret(code);
  console.log(func);
}

export function parse(path, context) {
  const data = fs.readFileSync(path);
  return vm.runInNewContext(data, context, path);
}

export function interpret(code) {

}
