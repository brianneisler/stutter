import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is classified as a `Type`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a `Type`, else `false`.
 * @example
 *
 * anyIsType(new Type(...))
 * //=> true
 *
 * anyIsType('abc')
 * //=> false
 */
const anyIsType = (any) => anyToStringTag(any) === 'Type'

export default anyIsType
