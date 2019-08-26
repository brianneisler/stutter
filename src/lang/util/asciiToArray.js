import stringSplit from './stringSplit'

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {string} ascii The string to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * asciiToArray('foo')
 * //=> ['a', 'b', 'c']
 */
const asciiToArray = (ascii) => stringSplit(ascii, '')

export default asciiToArray
