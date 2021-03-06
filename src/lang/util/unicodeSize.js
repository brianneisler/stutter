import { UNICODE } from '../constants/Regex'

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 * @example
 */
const unicodeSize = (string) => {
  let result = (UNICODE.lastIndex = 0)
  while (UNICODE.test(string)) {
    result += 1
  }

  // NOTE BRN: Reset to prevent messing up any other uses of this regex
  UNICODE.lastIndex = 0
  return result
}

export default unicodeSize
