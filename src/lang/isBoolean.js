import Any from './types/Any'
import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
const isBoolean = defn(
  'lang.isBoolean',
  'Checks if `Any` is classified as a `Boolean`.',

  [Any, () => Boolean],
  is(Boolean)
)

export default isBoolean
