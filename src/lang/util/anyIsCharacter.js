import anyIsString from './anyIsString'

/**
 * Checks if `any` is a single character string
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @since v0.1.0
 * @category lang.util
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `value` is a single character string.
 * @example
 *
 * anyIsCharacter('a')
 * // => true
 *
 * anyIsCharacter('abc')
 * // => false
 */
const anyIsCharacter = (any) => anyIsString(any) && any.length === 1

export default anyIsCharacter
