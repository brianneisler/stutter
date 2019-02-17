import anyIsPlainFunction from './anyIsPlainFunction'

/**
 * Checks if `value` is an Iterator. An Iterator is classified as having a property named `next` that is a plain function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an Iterator
 * @example
 *
 * const array = []
 * anyIsIterator(array[Symbol.iterator])
 * //=> true
 *:
 * anyIsIterator({
 *   next: () => {}
 * })
 * //=> true
 */
const anyIsIterator = (value) => value != null && anyIsPlainFunction(value.next)

export default anyIsIterator
