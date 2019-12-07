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
import arrayTail from './util/arrayTail'
import arrayUpdateIndex from './util/arrayUpdateIndex'
import defn from './defn'
import get from './get'
import mapClone from './util/mapClone'
import mapUpdateKey from './util/mapUpdateKey'
import objectClone from './util/objectClone'
import objectDeleteProperty from './util/objectDeleteProperty'
import set from './set'

/**
 * Returns a new value having updated the value at the given `selector` with the
 * return value of the `updater` function
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
const update = defn(
  'lang.update',
  'Returns a new value having updated the value at the given selctor`',

  [Function, Index, Array, () => Array],
  (func, index, array) => arrayUpdateIndex(arrayClone(array), index, func),

  [Index, Array, Function, () => Array],
  (index, array, func) => arrayUpdateIndex(arrayClone(array), index, func),

  [Function, Index, ImmutableList, () => ImmutableList],
  (func, index, immutableList) => immutableList.update(index, func),

  [Index, ImmutableList, Function, () => ImmutableList],
  (index, immutableList, func) => immutableList.update(index, func),

  [Function, Key, Map, () => Map],
  (func, key, map) => mapUpdateKey(mapClone(map), key, func),

  [Key, Map, Function, () => Map],
  (key, map, func) => mapUpdateKey(mapClone(map), key, func),

  [Function, Key, ImmutableMap, () => ImmutableMap],
  (func, key, immutableMap) => immutableMap.update(key, func),

  [Key, ImmutableMap, Function, () => ImmutableMap],
  (key, immutableMap, func) => immutableMap.update(key, func),

  [Function, Prop, Object, () => Object],
  (func, property, object) => objectUpdateProperty(objectClone(object), property),

  [Prop, Object, Function, () => Object],
  (property, object, func) => objectUpdateProperty(objectClone(object), property),

  [Path, Object],
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

export default update
