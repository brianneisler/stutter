import Array from '../classes/Array'

const { slice } = Array.prototype

/**
 * Returns a shallow copy of a portion of an array into a new array object
 * selected from begin to end (end not included). The original array will not be
 * modified.
 *
 * @private
 * @function
 * @immutable
 * @since v0.1.0
 * @category lang.util
 * @param {Array} array The array to slice
 * @param {number} [begin=0] Zero-based index at which to begin extraction.
 * @param {number} [end=array.length] Zero-based index before which to end
 * extraction. slice extracts up to but not including end.
 * @returns {Array} A new array containing the extracted elements.
 * @example
 *
 * arraySlice(['a', 'b', 'c', 'd', 'e'], 1, 3)
 * //=> [b', 'c']
 */
const arraySlice = (array, begin, end) => slice.call(array, begin, end)

export default arraySlice
