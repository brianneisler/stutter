import Array from './js/Array'

const { splice } = Array.prototype

/**
 * Changes the contents of an array by removing or replacing existing elements
 * and/or adding new elements in place.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array} array The array to splice
 * @param {number} [start=0] Zero-based index at which to begin extraction.
 * @param {number} [deleteCount=array.length] An integer indicating the number of elements in the array to remove from start.
 * @returns {Array} The array given to the function
 * @example
 *
 * arraySplice(['a', 'b', 'c', 'd', 'e'], 1, 3)
 * //=> ['a', 'e']
 */
const arraySplice = (array, start, deleteCount, ...rest) => {
  splice.call(array, start, deleteCount, ...rest)
  return array
}

export default arraySplice
