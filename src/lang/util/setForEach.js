import Set from '../classes/Set'

const { forEach } = Set.prototype

/**
 * This method executes a provided function once for each value in the `Set` object, in insertion order.
 *
 * See [Set.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Set} set The set to iterate over
 * @returns {Function} iteratee Function to execute for each value.
 *
 * let result = 0
 * setForEach(
 *   new Set([ 1, 2, 3 ]),
 *   (value) => {
 *     result = add(result, value)
 *   }
 * )
 * //=> 6
 */
const setForEach = (set, iteratee) => forEach.call(set, iteratee)

export default setForEach
