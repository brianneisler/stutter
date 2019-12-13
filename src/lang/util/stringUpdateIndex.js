import stringSetIndex from './stringSetIndex'

/**
 * Updates an index in a String. Returns a new copy of the String with the Index
 * updated with the result of the func.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {String} string
 * @param {Index} index
 * @param {Function} func
 * @return {String}
 */
const stringUpdateIndex = (string, index, func) => {
  const result = func(string[index])
  return stringSetIndex(string, index, result)
}

export default stringUpdateIndex
