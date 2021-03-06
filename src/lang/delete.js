import defn from './defn'
import deleteIndex from './deleteIndex'
import deleteKey from './deleteKey'
import deleteProperty from './deleteProperty'
import get from './get'
import has from './has'
import Indexed from './protocols/Indexed'
import Keyed from './protocols/Keyed'
import Propertied from './protocols/Propertied'
import set from './set'
import Any from './types/Any'
import Index from './types/IndexType'
import Key from './types/Key'
import Path from './types/Path'
import Property from './types/Property'
import anyDeletePathWith from './util/anyDeletePathWith'

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
  (indexed, index) => deleteIndex(indexed, index),

  [Key, Keyed, () => Keyed],
  (key, keyed) => deleteKey(keyed, key),

  [Keyed, Key, () => Keyed],
  (keyed, key) => deleteKey(keyed, key),

  [Property, Propertied, () => Propertied],
  (property, propertied) => deleteProperty(propertied, property),

  [Propertied, Property, () => Propertied],
  (propertied, property) => deleteProperty(propertied, property)
)

export default _delete
