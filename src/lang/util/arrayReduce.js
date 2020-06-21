import Array from '../classes/Array'

const { reduce } = Array.prototype

/**
 * This method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 *
 * See [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array} array The array to iterate over.
 * @param {*} initialValue A value to use as the first argument to the first call of the `func`
 * @param {Function} func The function to execute for each element
 * @returns {*} The accumulated value
 * @example
 *
 * const array = [1, 2, 3, 4]
 * arrayReduce(array, (x, y) => x + y)
 * //=> 10
 *
 * const array = [1, 2, 3, 4]
 * arrayReduce(array, (x, y) => x + y, 10)
 * //=> 20
 */
const arrayReduce = function (array, func, initialValue) {
  if (arguments.length < 3) {
    return reduce.call(array, func)
  }
  return reduce.call(array, func, initialValue)
}

export default arrayReduce
