import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is classified as a `Protocol`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a `Protocol`, else `false`.
 * @example
 *
 * anyIsProtocol(new Protocol(...))
 * //=> true
 *
 * anyIsProtocol('abc')
 * // => false
 */
const anyIsProtocol = (any) => anyToStringTag(any) === 'Protocol'

export default anyIsProtocol
