import { UNICODE } from '../constants/Regex'

/**
 * Converts a unicode `string` to an array.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {string} string The string to convert.
 * @returns {number} Returns the converted array.
 * @example
 *
 * unicodeToArray('abc') //=> ['a', 'b', 'c']
 */
const unicodeToArray = (string) => string.match(UNICODE) || []

export default unicodeToArray
