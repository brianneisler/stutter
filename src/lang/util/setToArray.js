import Array from '../classes/Array'
import setForEach from './setForEach'

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Set} set The set to convert.
 * @returns {Array} Returns the values.
 */
const setToArray = (set) => {
  let index = -1
  const result = Array(set.size)

  setForEach(set, (value) => {
    index += 1
    result[index] = value
  })

  return result
}

export default setToArray
