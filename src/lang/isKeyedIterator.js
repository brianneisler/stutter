import isPlainFunction from './isPlainFunction'

/**
 * Checks if `value` is a  KeyedIterator. A KeyedIterator is classified as having a property named `next` that is a plain function and a property named `getKey` that returns the current key.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a KeyedIterator
 * @example
 *
 * const object = {}
 * isKeyedIterator(objectToIterator(object))
 * //=> true
 *
 * const array = []
 * isKeyedIterator(arrayLikeToIterator(array))
 * //=> false
 *:
 * isKeyedIterator({
 *   next: () => {},
 *   getKey: () => {}
 * })
 * //=> true
 */
const isKeyedIterator = (value) =>
  value != null && isPlainFunction(value.next) && isPlainFunction(value.getKey)

export default isKeyedIterator
