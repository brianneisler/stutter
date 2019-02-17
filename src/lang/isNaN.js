import { anyIsNaN } from './util'
import defn from './defn'

/**
 * Checks if `any` is `NaN`.
 *
 * **Note:** This method is based on [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as global [`isNaN`](https://mdn.io/isNaN) which returns `true` for `undefined` and other non-number values.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is `NaN`, else `false`.
 * @example
 *
 * isNaN(NaN)
 * // => true
 *
 * isNaN(new Number(NaN))
 * // => true
 *
 * isNaN(undefined)
 * // => false
 */
const isNaN = defn('isNaN', anyIsNaN)

export default isNaN
