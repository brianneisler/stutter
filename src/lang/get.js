// required
import Any from './types/Any'
import Function from './types/Function'
import Index from './types/IndexType'
import Indexed from './protocols/Indexed'
import Key from './types/Key'
import Keyed from './protocols/Keyed'
import Path from './types/Path'
import Propertied from './protocols/Propertied'
import Property from './types/Property'
import anyGetPathWith from './util/anyGetPathWith'
import defn from './defn'
import getIndex from './getIndex'
import getKey from './getKey'
import getProperty from './getProperty'

const get = defn(
  'lang.get',
  {
    description: 'Retrieve the value at a given selector',
    since: 'v0.2.0'
  },

  [Path, Any, () => Any],
  (path, any) => anyGetPathWith(any, path, get),

  [Any, Path, () => Any],
  (any, path) => anyGetPathWith(any, path, get),

  [Index, Indexed, () => Any],
  (index, indexed) => getIndex(indexed, index),

  [Indexed, Index, () => Any],
  (indexed, index) => getIndex(indexed, index),

  [Key, Keyed, () => Any],
  (key, keyed) => getKey(keyed, key),

  [Keyed, Key, () => Any],
  (keyed, key) => getKey(keyed, key),

  [Property, Propertied, () => Any],
  (property, propertied) => getProperty(propertied, property),

  [Propertied, Property, () => Any],
  (propertied, property) => getProperty(propertied, property),

  [Function, Any, () => Any],
  (func, any) => func(any),

  [Any, Function, () => Any],
  (any, func) => func(any)
)

export default get
