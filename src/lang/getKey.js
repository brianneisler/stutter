import Any from './types/Any'
import ImmutableMap from './types/ImmutableMap'
import Key from './types/Key'
import Map from './types/Map'
import WeakMap from './types/WeakMap'
import defn from './defn'
import mapGetKey from './util/mapGetKey'

/**
 * @since v0.1.0
 * @param {Key} key The Key to use.
 * @param {Map|ImmutableMap|WeakMap} map The Map to retrieve the Key from.
 * @returns {Any} The data at `key`.
 * @example
 *
 * get('a', new Map([['a', 1], ['b', 2]]))
 * //=> 1
 *
 * get('b', new ImmutableMap([['a', 1], ['b', 2]]))
 * //=> 2
 *
 * const key = {}
 * get(key, new WeakMap([[key, 1]]))
 * //=> 1
 */
const getKey = defn(
  'lang.getKey',
  'Retrieve the value at a given Key',

  [Key, Map, () => Any],
  (key, map) => mapGetKey(map, key),

  [Map, Key, () => Any],
  (map, key) => mapGetKey(map, key),

  [Key, ImmutableMap, () => Any],
  (key, immutableMap) => immutableMap.get(key),

  [ImmutableMap, Key, () => Any],
  (immutableMap, key) => immutableMap.get(key),

  [Key, WeakMap, () => Any],
  (key, weakMap) => mapGetKey(weakMap, key),

  [WeakMap, Key, () => Any],
  (weakMap, key) => mapGetKey(weakMap, key)
)

export default getKey
