import { anyIsFunction } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a `Function` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
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
const isFunction = defn('isFunction', anyIsFunction)

export default isFunction
