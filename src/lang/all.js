import defn from './defn'
import iterate from './iterate'
import set from './set'
import Any from './types/Any'
import anyResolveAll from './util/anyResolveAll'

const all = defn(
  'lang.all',
  {
    description: 'Resolves all resolvable values in an Iterable data object',
    since: 'v0.2.0'
  },

  [Any, () => Any],
  (any) => anyResolveAll(any, iterate, set)
)

export default all
