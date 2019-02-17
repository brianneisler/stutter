import { anyIsTransformer } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a `Transformer` primitive or object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a transformer, else `false`.
 * @example
 *
 * isTransformer({
 *   ['@@transducer/step']: () => {}
 * }) // => true
 *
 * isTransformer('abc') // => false
 */
const isTransformer = defn('isTransformer', anyIsTransformer)

export default isTransformer
