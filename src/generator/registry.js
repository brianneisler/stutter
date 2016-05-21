import * as _ from '../util';

let generatorRegistry = {};

export function add(generators) {
  if (_.isArray(generators)) {
    _.each(generators, (generator) => {
      generatorRegistry[generator.type] = generator.generate;
    });
  } else {
    generatorRegistry[generator.type] = generator.generate;
  }
}

export function get(type) {
  return _.get(generatorRegistry, type);
}
