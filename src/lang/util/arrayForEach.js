import Array from '../classes/Array'

const { forEach } = Array.prototype

/**
 * This method executes a provided function once for each array element.
 *
 * See [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @template T
 * @param {T[]} array The array to iterate over.
 * @param {(value: T, index: Number) => void} func The function to execute for each element
 * @returns {T[]} The original array
 * @example
 *
 * const items = ['item1', 'item2', 'item3']
 * const copy = []
 *
 * for (let i=0; i<items.length; i++) {
 *   copy.push(items[i])
 * }
 * //=> ['item1', 'item2', 'item3']
 */
const arrayForEach = (array, func) => forEach.call(array, func)

export default arrayForEach
