import Any from './types/Any'
import Boolean from './types/Boolean'
import Function from './types/Function'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a function, else `false`.
 * @example
 *
 * isFunction(function() {})
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
const isFunction = defn(
  'lang.isFunction',
  'Checks if `value` is classified as a `Function`.',

  [Any, () => Boolean],
  is(Function)
)

export default isFunction
