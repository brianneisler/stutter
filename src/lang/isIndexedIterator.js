import isPlainFunction from './isPlainFunction'

/**
 * Checks if `value` is an IndexedIterator. An IndexedIterator is classified as having a property named `next` that is a plain function and a property named `getIndex` that is a plain function.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an IndexedIterator
 * @example
 *
 * isIndexedIterator({
 *   next: () => {}
 * })
 * //=> true
 *
 * const array = []
 * isIndexedIterator(array[Symbol.iterator])
 * //=> false
 */
const isIndexedIterator = (value) =>
  value != null && isPlainFunction(value.next) && isPlainFunction(value.getIndex)

export default isIndexedIterator
