import anyToString from './anyToString'

/**
 * Converts `any` to a the name of a function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} fn The function to convert
 * @returns {string} Returns the function's name.
 * @example
 *
 * functionToFunctionName(function test() {})
 * // => 'test'
 */
const functionToFunctionName = (fn) => {
  // String(x => x) evaluates to 'x => x', so the pattern may not match.
  const match = anyToString(fn).match(/^function (\w*)/)
  return match == null ? '' : match[1]
}

export default functionToFunctionName
