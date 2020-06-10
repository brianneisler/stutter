import arrayClone from './arrayClone'

/**
 * This method creates a copy of the given Array and then removes the last
 * element from the copy. The copy is then returned.
 *
 * See [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) for more information
 *
 * @private
 * @function
 * @immutable
 * @since v0.1.0
 * @category lang.util
 * @param {Array} array The array to iterate over.
 * @param {Function} func The function to execute for each element
 * @returns {Array} The new array
 * @example
 *
 * const array = [1, 4, 9, 16]
 * arrayPop(array)
 * // => [2, 8, 18, 32]
 */
const arrayPop = (array) => {
  if (array.length === 0) {
    return array
  }
  const clone = arrayClone(array)
  clone.pop()
  return clone
}

export default arrayPop
