import stringSubstring from './stringSubstring'

/**
 * Deletes an index from a String. Returns a new copy of the String with the index
 * removed.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {String} string
 * @param {Index} index
 * @returns {String}
 */
const stringDeleteIndex = (string, index) => {
  if (index >= string.length) {
    return string
  }
  return stringSubstring(string, 0, index) + stringSubstring(string, index + 1)
}

export default stringDeleteIndex
