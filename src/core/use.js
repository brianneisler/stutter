import compose from './compose'
import go from './go'
import identity from './identity'
import map from './map'

export default function use(...fns) {
  const wrapped = map(fns, (fn) => (next) => fn(async (...args) => await go(args, next)))
  const composed = compose(...wrapped)
  return (handler = identity) => composed(handler)
}
