import arrayClone from './arrayClone'
import arraySplice from './arraySplice'

/**
 * Deletes an index from an Array. Returns a new copy of the Array with the index
 * removed.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {Array} array
 * @param {number} index
 * @returns {Array}
 */
const arrayDeleteIndex = (array, index) => {
  if (index >= array.length) {
    return array
  }
  return arraySplice(arrayClone(array), index, 1)
}

export default arrayDeleteIndex
