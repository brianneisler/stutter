import arrayClone from './arrayClone'

/**
 * Updates an index in an Array. Returns a new copy of the Array with the index
 * updated with the result of the func.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {Array} array
 * @param {number} index
 * @param {Function} func
 * @returns {Array}
 */
const arrayUpdateIndex = (array, index, func) => {
  const clone = arrayClone(array)
  clone[index] = func(array[index])
  return clone
}

export default arrayUpdateIndex
