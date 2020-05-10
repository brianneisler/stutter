import Any from './types/Any'
import Boolean from './types/Boolean'
import Function from './types/Function'
import Index from './types/IndexType'
import Indexed from './protocols/Indexed'
import Key from './types/Key'
import Keyed from './protocols/Keyed'
import Path from './types/Path'
import Propertied from './protocols/Propertied'
import Property from './types/Property'
import anyHasPathWith from './util/anyHasPathWith'
import defn from './defn'
import get from './get'
import hasIndex from './hasIndex'
import hasKey from './hasKey'
import hasProperty from './hasProperty'

const has = defn(
  'lang.has',
  {
    description:
      'Returns whether or not the value contains the given selector.',
    since: 'v0.2.0'
  },

  [Path, Any, () => Boolean],
  (path, any) => anyHasPathWith(any, path, get, has),

  [Any, Path, () => Boolean],
  (any, path) => anyHasPathWith(any, path, get, has),

  [Index, Indexed, () => Boolean],
  (index, indexed) => hasIndex(indexed, index),

  [Indexed, Index, () => Boolean],
  (indexed, index) => hasIndex(indexed, index),

  [Key, Keyed, () => Any],
  (key, keyed) => hasKey(keyed, key),

  [Keyed, Key, () => Any],
  (keyed, key) => hasKey(keyed, key),

  [Property, Propertied, () => Any],
  (property, propertied) => hasProperty(propertied, property),

  [Propertied, Property, () => Any],
  (propertied, property) => hasProperty(propertied, property),

  [Function, Any, () => Any],
  (func, any) => func(any),

  [Any, Function, () => Any],
  (any, func) => func(any)
)

export default has
