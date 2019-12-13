import Any from './types/Any'
import Array from './types/Array'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import Path from './types/Path'
import Property from './types/Property'
import anyDeletePathWith from './util/anyDeletePathWith'
import arrayDeleteIndex from './util/arrayDeleteIndex'
import defn from './defn'
import get from './get'
import has from './has'
import mapDeleteKey from './util/mapDeleteKey'
import objectDeleteProperty from './util/objectDeleteProperty'
import set from './set'

/**
 * Returns a new value that does not contain `target`
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @example
 *
 * delete('b', { a: 1, b: 2, c: 3 })
 * //=> {a: 1, c: 3}
 *
 * delete(1, ['a', 'b', 'c'])
 * //=> ['a', 'c']
 */
const _delete = defn(
  'lang.delete',
  'Returns a new value that does not contain `target`',

  [Path, Any, () => Any],
  (path, any) => anyDeletePathWith(any, path, get, has, set, _delete),

  [Any, Path, () => Any],
  (any, path) => anyDeletePathWith(any, path, get, has, set, _delete),

  [Index, Array, () => Array],
  (index, array) => arrayDeleteIndex(array, index),

  [Array, Index, () => Array],
  (array, index) => arrayDeleteIndex(array, index),

  [Index, ImmutableList, () => ImmutableList],
  (index, immutableList) => immutableList.delete(index),

  [ImmutableList, Index, () => ImmutableList],
  (immutableList, index) => immutableList.delete(index),

  [Key, Map, () => Map],
  (key, map) => mapDeleteKey(map, key),

  [Map, Key, () => Map],
  (map, key) => mapDeleteKey(map, key),

  [Key, ImmutableMap, () => ImmutableMap],
  (key, immutableMap) => immutableMap.delete(key),

  [ImmutableMap, Key, () => ImmutableMap],
  (immutableMap, key) => immutableMap.delete(key),

  [Property, Object, () => Object],
  (property, object) => objectDeleteProperty(object, property),

  [Object, Property, () => Object],
  (object, property) => objectDeleteProperty(object, property)
)

export default _delete
