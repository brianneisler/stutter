import anyIsObjectLike from './anyIsObjectLike'
import anyToStringTag from './anyToStringTag'
import nodeTypes from './nodeTypes'

/** Used to match `toStringTag` values of typed arrays. */
const reTypedTag = /^(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)$/

/* Node.js helper references. */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray

/**
 * Checks if `any` is classified as a typed array.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a typed array, else `false`.
 * @example
 *
 * anyIsTypedArray(new Uint8Array())
 * // => true
 *
 * anyIsTypedArray([])
 * // => false
 */
const anyIsTypedArray = nodeIsTypedArray
  ? (any) => nodeIsTypedArray(any)
  : (any) => anyIsObjectLike(any) && reTypedTag.test(anyToStringTag(any))

export default anyIsTypedArray
