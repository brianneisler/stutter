import Any from './types/Any'
import Array from './types/Array'
import Character from './types/Character'
import Function from './types/Function'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import Path from './types/Path'
import Property from './types/Property'
import anyGetPathWith from './util/anyGetPathWith'
import arrayGetIndex from './util/arrayGetIndex'
import defn from './defn'
import mapGetKey from './util/mapGetKey'
import objectGetProperty from './util/objectGetProperty'
import stringGetIndex from './util/stringGetIndex'

/**
 * Retrieve the value at a given selector
 *
 * @function
 * @since v0.1.0
 * @param {Array|String|Number|Function} path The path to use.
 * @param {Object} value The value to retrieve the nested property from.
 * @returns {*} The data at `path`.
 * @example
 *
 * get(path(['a', 'b']), {a: {b: 2}})
 * //=> 2
 *
 * get(path(['a', 'b']), {c: {b: 2}})
 * //=> undefined
 *
 * get('a', {a: {b: 2}})
 * //=> { b: 2 }
 *
 * get(path('a.b'), {a: {b: 2}})
 * //=> 2
 *
 * get(path('a[0]'), {a: [ 1, 2 ]})
 * //=> 1
 *
 * get(path('[0]'), [ 1, 2 ])
 * //=> 1
 */
const get = defn(
  'lang.get',
  'Retrieve the value at a given selector',

  [Path, Any, () => Any],
  (path, any) => anyGetPathWith(any, path, get),

  [Any, Path, () => Any],
  (any, path) => anyGetPathWith(any, path, get),

  [Index, Array, () => Any],
  (index, array) => arrayGetIndex(array, index),

  [Array, Index, () => Any],
  (array, index) => arrayGetIndex(array, index),

  [Index, ImmutableList, () => Any],
  (index, immutableList) => immutableList.get(index),

  [ImmutableList, Index, () => Any],
  (immutableList, index) => immutableList.get(index),

  [Index, String, () => Character],
  (index, string) => stringGetIndex(string, index),

  [String, Index, () => Character],
  (string, index) => stringGetIndex(string, index),

  [Key, Map, () => Any],
  (key, map) => mapGetKey(map, key),

  [Map, Key, () => Any],
  (map, key) => mapGetKey(map, key),

  [Key, ImmutableMap, () => Any],
  (key, immutableMap) => immutableMap.get(key),

  [ImmutableMap, Key, () => Any],
  (immutableMap, key) => immutableMap.get(key),

  [Property, Object, () => Any],
  (property, object) => objectGetProperty(object, property),

  [Object, Property, () => Any],
  (object, property) => objectGetProperty(object, property),

  [Function, Any, () => Any],
  (func, any) => func(any),

  [Any, Function, () => Any],
  (any, func) => func(any)
)

export default get
