import mapClone from './mapClone'

/**
 * Updates a `Key` on a `Map`. Returns a new copy of the `Map` with the `Key`
 * updated.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {Map} map
 * @param {Key} key
 * @param {Function} func
 * @returns {Map}
 */
const mapUpdateKey = (map, key, func) => {
  const clone = mapClone(map)
  clone.set(key, func(map.get(key)))
  return clone
}

export default mapUpdateKey
