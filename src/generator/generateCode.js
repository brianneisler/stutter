import * as codes from '../codes';
import * as registry from './registry';
import * as _ from '../util';

const codeGenerators = _.reduce(codes, (reduction, code) => {
  return _.set(reduction, code.type, code);
}, {});

export default function generateCode(statement) {
  registry.add(_.map(codes, code => code));
  return doGenerate(statement);
}
