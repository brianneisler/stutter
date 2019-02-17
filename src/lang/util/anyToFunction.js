import anyIsFunction from './anyIsFunction'

/**
 * Converts `any` to a `Function`.
 *
 * @private
 * @function
 * @since 0.0.21
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {Function} Returns the converted `Function`.
 * @example
 *
 * anyToFunction({ 'a': 1, 'b': 2 })
 * //=> () => { 'a': 1, 'b': 2 }
 *
 * anyToFunction('abc')
 * //=> () => 'abc'
 *
 * anyToFunction({
 *   toFunction() {
 *     return () => 'foo'
 *   }
 * })
 * //=> () => 'foo'
 */
const anyToFunction = (any) => {
  if (any != null && anyIsFunction(any.toFunction)) {
    return any.toFunction()
  }
  if (anyIsFunction(any)) {
    return any
  }
  return () => any
}

export default anyToFunction
