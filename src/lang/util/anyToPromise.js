import Promise from './js/Promise'
import anyIsPromise from './anyIsPromise'

/**
 * Converts `any` to a `Promise`.
 *
 * @private
 * @function
 * @since 0.0.21
 * @category lang.util
 * @param {Any} any The value to convert.
 * @returns {Promise} Returns the converted `Promise`.
 * @example
 *
 * anyToPromise({ 'a': 1, 'b': 2 })
 * //=> Promise({ 'a': 1, 'b': 2 })
 */
const anyToPromise = (any) => {
  if (anyIsPromise(any)) {
    return any
  }
  return Promise.resolve(any)
}

export default anyToPromise
