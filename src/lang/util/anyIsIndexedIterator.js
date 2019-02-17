import anyIsPlainFunction from './anyIsPlainFunction'

/**
 * Checks if `any` is an IndexedIterator. An IndexedIterator is classified as having a property named `next` that is a plain function and a property named `getIndex` that is a plain function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is an IndexedIterator
 * @example
 *
 * anyIsIndexedIterator({
 *   next: () => {}
 * })
 * //=> true
 *
 * const array = []
 * anyIsIndexedIterator(array[Symbol.iterator])
 * //=> false
 */
const anyIsIndexedIterator = (any) =>
  any != null && anyIsPlainFunction(any.next) && anyIsPlainFunction(any.getIndex)

export default anyIsIndexedIterator
