import curry from '../curry'
import createFnFactory from './createFnFactory'

export default function withCurry(arity) {
  return (fn) => {
    const factory = createFnFactory(fn)
    return (props) => curry(factory(props), arity)
  }
}
