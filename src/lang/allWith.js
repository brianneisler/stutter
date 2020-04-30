import Any from './types/Any'
import Function from './types/Function'
import anyResolveAllWith from './util/anyResolveAllWith'
import defn from './defn'
import iterate from './iterate'
import set from './set'

const allWith = defn(
  'lang.allWith',
  {
    description:
      'Resolves all async values in an Iterable data object and executes the given `fn` with the result',
    since: 'v0.2.0'
  },

  [Any, Function, () => Any],
  (any, func) => anyResolveAllWith(any, func, iterate, set),

  [Function, Any, () => Any],
  (func, any) => anyResolveAllWith(any, func, iterate, set)
)

export default allWith
