import createFnFactory from './util/createFnFactory'
import hoist from './hoist'

const _with = (enhancer) => {
  return (fn) => {
    const factory = createFnFactory(fn)
    return (props) => hoist(enhancer(factory, props), fn)
  }
}

export default _with
