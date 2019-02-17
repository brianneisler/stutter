import { anyIsError } from './util'
import defn from './defn'

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
const isError = defn('isError', anyIsError)

export default isError
