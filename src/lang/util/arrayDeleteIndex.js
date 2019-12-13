import arrayClone from './arrayClone'
import arraySplice from './arraySplice'

/**
 * Deletes an Index from an Array. Returns a new copy of the Array with the Index
 * removed.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {Array} array
 * @param {Index} index
 * @returns {Array}
 */
const arrayDeleteIndex = (array, index) => {
  if (index >= array.length) {
    return array
  }
  return arraySplice(arrayClone(array), index, 1)
}

export default arrayDeleteIndex
