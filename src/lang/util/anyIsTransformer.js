/**
 * Checks if `any` is classified as a `Transformer` primitive or object.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a Transformer, else `false`.
 * @example
 *
 * anyIsTransformer({
 *   ['@@transducer/step']: () => {}
 * })
 * // => true
 *
 * anyIsTransformer('abc')
 * // => false
 */
const anyIsTransformer = (any) => any != null && typeof any['@@transducer/step'] === 'function'

export default anyIsTransformer
