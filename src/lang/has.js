import Any from './types/Any'
import Array from './types/Array'
import Function from './types/Function'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import Path from './types/Path'
import Property from './types/Property'
import anyHasPathWith from './util/anyHasPathWith'
import arrayHasIndex from './util/arrayHasIndex'
import defn from './defn'
import get from './get'
import mapHasKey from './util/mapHasKey'
import objectHasOwnProperty from './util/objectHasOwnProperty'

/**
 * Returns whether or not the value contains the given selector.
 *
 * @function
 * @since v0.1.0
 * @param {Array|String} selector The selector to use.
 * @param {Object} value The value to check the path in.
 * @return {Boolean} Whether the selector exists.
 * @example
 *
 * has(['a', 'b'], {a: {b: 2}})          // => true
 * has(['a', 'b'], {a: {b: undefined}})  // => true
 * has(['a', 'b'], {a: {c: 2}})               // => false
 * has([], {})                           // => true
 */
const has = defn(
  'lang.has',
  'Returns whether or not the value contains the given selector.',

  [Path, Any, () => Any],
  (path, any) => anyHasPathWith(any, path, get, has),

  [Any, Path, () => Any],
  (any, path) => anyHasPathWith(any, path, get, has),

  [Index, Array, () => Any],
  (index, array) => arrayHasIndex(array, index),

  [Array, Index, () => Any],
  (array, index) => arrayHasIndex(array, index),

  [Index, ImmutableList, () => Any],
  (index, immutableList) => immutableList.has(index),

  [ImmutableList, Index, () => Any],
  (immutableList, index) => immutableList.has(index),

  [Key, Map, () => Any],
  (key, map) => mapHasKey(map, key),

  [Map, Key, () => Any],
  (map, key) => mapHasKey(map, key),

  [Key, ImmutableMap, () => Any],
  (key, immutableMap) => immutableMap.has(key),

  [ImmutableMap, Key, () => Any],
  (immutableMap, key) => immutableMap.has(key),

  [Property, Object, () => Any],
  (property, object) => objectHasOwnProperty(object, property),

  [Object, Property, () => Any],
  (object, property) => objectHasOwnProperty(object, property),

  [Function, Any, () => Any],
  (func, any) => func(any),

  [Any, Function, () => Any],
  (any, func) => func(any)
)

export default has
