import anyIsFn from './anyIsFn'
import anyIsFunction from './anyIsFunction'
import anyToFunction from './anyToFunction'
import definitionToFn from './definitionToFn'

/**
 * Converts `any` to an `Fn`.
 *
 * @private
 * @function
 * @since 0.0.21
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {Fn} Returns the converted `Fn`.
 * @example
 *
 * anyToFn(() => 'foo')
 * //=> Fn(() => 'foo')
 *
 * anyToFn({ 'a': 1, 'b': 2 })
 * //=> Fn(() => { 'a': 1, 'b': 2 })
 *
 * anyToFn('abc')
 * //=> Fn(() => 'abc')
 *
 * anyToFn({
 *   toFn() {
 *     return Fn(() => 'foo')
 *   }
 * })
 * //=> Fn(() => 'foo')
 */
const anyToFn = (any) => {
  if (any != null && anyIsFunction(any.toFn)) {
    return any.toFn()
  }
  if (anyIsFn(any)) {
    return any
  }
  if (anyIsFunction(any)) {
    return definitionToFn(any)
  }
  return definitionToFn(anyToFunction(any))
}

export default anyToFn
