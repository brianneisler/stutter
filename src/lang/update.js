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
import anyUpdatePathWith from './util/anyUpdatePathWith'
import arrayUpdateIndex from './util/arrayUpdateIndex'
import defn from './defn'
import get from './get'
import mapUpdateKey from './util/mapUpdateKey'
import objectUpdateProperty from './util/objectUpdateProperty'
import set from './set'

/**
 * Returns a new value having updated the value at the given `selector` with the
 * return value of the `updater` function
 *
 * @function
 * @since v0.1.0
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
  'Returns a new value having updated the value at the given `selctor` with the return value of the `func` function',

  [Path, Any, Function, () => Any],
  (path, any, func) => anyUpdatePathWith(any, path, func),

  [Function, Path, Any, () => Any],
  (func, path, any) => anyUpdatePathWith(any, path, func),

  [Function, Index, Array, () => Array],
  (func, index, array) => arrayUpdateIndex(array, index, func),

  [Index, Array, Function, () => Array],
  (index, array, func) => arrayUpdateIndex(array, index, func),

  [Function, Index, ImmutableList, () => ImmutableList],
  (func, index, immutableList) => immutableList.update(index, func),

  [Index, ImmutableList, Function, () => ImmutableList],
  (index, immutableList, func) => immutableList.update(index, func),

  [Function, Key, Map, () => Map],
  (func, key, map) => mapUpdateKey(map, key, func),

  [Key, Map, Function, () => Map],
  (key, map, func) => mapUpdateKey(map, key, func),

  [Function, Key, ImmutableMap, () => ImmutableMap],
  (func, key, immutableMap) => immutableMap.update(key, func),

  [Key, ImmutableMap, Function, () => ImmutableMap],
  (key, immutableMap, func) => immutableMap.update(key, func),

  [Function, Property, Object, () => Object],
  (func, property, object) => objectUpdateProperty(object, property, func),

  [Property, Object, Function, () => Object],
  (property, object, func) => objectUpdateProperty(object, property, func)
)

export default update
