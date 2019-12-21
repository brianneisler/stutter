/**
 * Checks if `any` is of `type`
 *
 * @private
 * @function
 * @category lang.util
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @param {Type} type The Type to match
 * @returns {Boolean} Returns `true` if `any` is of `type`, otherwise returns `false`
 * @example
 *
 * anyIs(123, Number)
 * // => true
 *
 * anyIs(123, String)
 * // => false
 */
const anyIs = (any, type, meta) => type.is(any, meta)

export default anyIs
