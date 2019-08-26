import arrayLikeCastSlice from '../lang/uril/arrayLikeCastSlice'
import hasUnicode from './hasUnicode'
import stringToArray from './stringToArray'

/**
 * Creates a higher order function like `lowerFirst`.
 *
 * @param {ArrayLike} method The method to use on the first element before returning value
 * @returns {ArrayLike} Returns the new case function.
 */
const replaceFirstWith = curry

export default firstWith
