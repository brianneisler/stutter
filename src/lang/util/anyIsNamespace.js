import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is classified as a `Namespace`
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a `Namespace`, else `false`.
 * @example
 *
 * anyIsNamespace(new Namespace(...))
 * //=> true
 *
 * anyIsNamespace('abc')
 * //=> false
 */
const anyIsNamespace = (any) => anyToStringTag(any) === 'Namespace'

export default anyIsNamespace
