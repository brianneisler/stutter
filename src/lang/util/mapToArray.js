import Array from './js/Array'
import mapForEach from './mapForEach'

/**
 * Converts `map` to an `Array` of its key-value pairs.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Map} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
const mapToArray = (map) => {
  let index = -1
  const result = Array(map.size)

  mapForEach(map, (value, key) => {
    index += 1
    result[index] = [key, value]
  })

  return result
}

export default mapToArray
