import arrayLikeSlice from './arrayLikeSlice'

/**
 * Casts `arrayLike` to a slice if it's needed.
 *
 * Unlike [`arrayLikeSlice`](#arrayLikeSlice) this method returns the original instance if the slice takes the entire array.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {ArrayLike} arrayLike The array like value to slice values from
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 * @example
 *
 * arrayLikeCastSlice(['a', 'b', 'c'], 0, 2)
 * //=> ['a', 'b']
 *
 * const array  = ['a', 'b', 'c']
 * const result = arrayLikeCastSlice(array , 0, 3)
 * array === result
 * //=> true
 */
const arrayLikeCastSlice = (arrayLike, start, end) => {
  const { length } = arrayLike
  end = end === undefined ? length : end
  return !start && end >= length ? arrayLike : arrayLikeSlice(arrayLike, start, end)
}

export default arrayLikeCastSlice
