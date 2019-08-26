/**
 * Determines if `any` is an Placeholder.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check
 * @returns {boolean}
 * @example
 *
 * anyIsPlaceholder({
 *   ['@@functional/placeholder']: true
 * })
 * //=> true
 */
const anyIsPlaceholder = (any) =>
  any != null && typeof any === 'object' && any['@@functional/placeholder'] === true

export default anyIsPlaceholder
