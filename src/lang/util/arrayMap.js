import Array from './js/Array'

const { map } = Array.prototype

/**
 * This method creates a new array with the results of calling a provided function on every element in the calling array.
 *
 * See [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array} array The array to iterate over.
 * @param {Function} fn The function to execute for each element
 * @returns {Array} The new array
 * @example
 *
 * const array = [1, 4, 9, 16]
 * arrayMap(array, x => x * 2)
 * //=> [2, 8, 18, 32]
 */
const arrayMap = (array, fn) => map.call(array, fn)

export default arrayMap