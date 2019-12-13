import arraySetIndex from './arraySetIndex'

/**
 * Updates an index in an Array. Returns a new copy of the Array with the index
 * updated with the result of the func.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {Array} array
 * @param {Index} index
 * @param {Function} func
 * @return {Array}
 */
const arrayUpdateIndex = (array, index, func) => {
  const result = func(array[index])
  return arraySetIndex(array, index, result)
}

export default arrayUpdateIndex
