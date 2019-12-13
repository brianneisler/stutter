import Any from './types/Any'
import Boolean from './types/Boolean'
import Error from './types/Error'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `Any` is an `Error` type, else `false`.
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
const isError = defn(
  'lang.isError',
  'Checks if `Any` is classified as an `Error` type.',

  [Any, () => Boolean],
  is(Error)
)

export default isError
