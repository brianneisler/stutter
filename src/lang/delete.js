import Array from './types/Array'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import Path from './types/Path'
import Prop from './types/Prop'
import anyIsNil from './util/anyIsNil'
import anyResolveWith from './util/anyResolveWith'
import arrayClone from './util/arrayClone'
import arrayDeleteIndex from './util/arrayDeleteIndex'
import arrayTail from './util/arrayTail'
import defn from './defn'
import get from './get'
import mapClone from './util/mapClone'
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

  [Index, Array],
  (index, array) => arrayDeleteIndex(arrayClone(array), index),

  [Array, Index],
  (array, index) => arrayDeleteIndex(arrayClone(array), index),

  [Index, ImmutableList],
  (index, immutableList) => immutableList.delete(index),

  [ImmutableList, Index],
  (immutableList, index) => immutableList.delete(index),

  [Key, Map],
  (key, map) => mapDeleteKey(mapClone(map), key),

  [Map, Key],
  (map, key) => mapDeleteKey(mapClone(map), key),

  [Key, ImmutableMap],
  (key, immutableMap) => immutableMap.delete(key),

  [ImmutableMap, Key],
  (immutableMap, key) => immutableMap.delete(key),

  [Prop, Object],
  (property, object) => objectDeleteProperty(objectClone(object), property),

  [Object, Prop],
  (object, property) => objectDeleteProperty(objectClone(object), property),

  [Path, Object],
  (path, object) => {
    switch (path.length) {
      case 0:
        return object
      case 1:
        return _delete(object, path[0])
      default:
        const head = path[0]
        return anyResolveWith(get(head, object), (headValue) => {
          if (anyIsNil(headValue)) {
            return object
          }
          return set(object, head, _delete(arrayTail(path), headValue))
        })
    }
  }
)

export default _delete
