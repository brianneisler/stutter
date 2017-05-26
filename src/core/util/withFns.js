import Immutable from 'immutable'
import createFnFactory from './createFnFactory'

export default function withFns(fns) {
  return (fn) => {
    const factory = createFnFactory(fn)
    (props) => {
      return factory(props.mergeWith(existingValue => existingValue, Immutable.Map(fns)))
    }
  }
}
