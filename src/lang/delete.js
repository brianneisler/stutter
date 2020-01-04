import Any from './types/Any'
import Index from './types/IndexType'
import Indexed from './protocols/Indexed'
import Key from './types/Key'
import Keyed from './protocols/Keyed'
import Path from './types/Path'
import Propertied from './protocols/Propertied'
import Property from './types/Property'
import anyDeletePathWith from './util/anyDeletePathWith'
import defn from './defn'
import deleteIndex from './deleteIndex'
import deleteKey from './deleteKey'
import deleteProperty from './deleteProperty'
import get from './get'
import has from './has'
import set from './set'

const _delete = defn(
  'lang.delete',
  {
    description: 'Returns a new value that does not contain `target`',
    since: 'v0.2.0'
  },

  [Path, Any, () => Any],
  (path, any) => anyDeletePathWith(any, path, get, has, set, _delete),

  [Any, Path, () => Any],
  (any, path) => anyDeletePathWith(any, path, get, has, set, _delete),

  [Index, Indexed, () => Indexed],
  (index, indexed) => deleteIndex(indexed, index),

  [Indexed, Index, () => Indexed],
  deleteIndex,

  [Key, Keyed, () => Keyed],
  (key, keyed) => deleteKey(keyed, key),

  [Keyed, Key, () => Keyed],
  deleteKey,

  [Property, Propertied, () => Propertied],
  (property, propertied) => deleteProperty(propertied, property),

  [Propertied, Property, () => Propertied],
  deleteProperty
)

export default _delete
