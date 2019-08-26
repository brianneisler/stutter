import Array from './js/Array'

/**
 * This method creates a new, shallow-copied Array instance from an array-like or iterable object.
 *
 * See [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} arrayLike An array-like or iterable object to convert to an array.
 * @param {function} mapFn Map function to call on every element of the array.
 * @param {Object} thisArg Value to use as this when executing mapFn.
 * @returns {Array} A new `Array` instance
 * @example
 *
 * arrayFrom('foo')
 * //=> ['f', 'o', 'o']
 *
 * arrayFrom(new Set(['foo', 'bar']))
 * //=> ['foo', 'bar']
 *
 * arrayFrom([1, 2, 3], x => x + x)
 * //=> [2, 4, 6]
 */
const arrayFrom = Array.from

export default arrayFrom
