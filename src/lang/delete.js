import Array from './types/Array'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import Path from './types/Path'
import Prop from './types/Property'
import anyIsNil from './util/anyIsNil'
import anyResolveWith from './util/anyResolveWith'
import arrayDeleteIndex from './util/arrayDeleteIndex'
import defn from './defn'
import get from './get'
import mapDeleteKey from './util/mapDeleteKey'
import objectClone from './util/objectClone'
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

  [Prop, Object, () => Object],
  (property, object) => objectDeleteProperty(objectClone(object), property),

  [Object, Prop, () => Object],
  (object, property) => objectDeleteProperty(objectClone(object), property),

  [Path, Object, () => Object],
  (path, object) => {
    switch (path.size) {
      case 0:
        return object
      case 1:
        return _delete(object, path.get(0))
      default:
        const head = path.get(0)
        return anyResolveWith(get(head, object), (headValue) => {
          if (anyIsNil(headValue)) {
            return object
          }
          return set(object, head, _delete(path.tail(), headValue))
        })
    }
  }
)

export default _delete
