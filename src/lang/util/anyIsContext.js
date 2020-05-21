import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is classified as a `Context`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a `Context`, else `false`.
 * @example
 *
 * anyIsContext(new Context(...))
 * //=> true
 *
 * anyIsContext('abc')
 * //=> false
 */
const anyIsContext = (any) => anyToStringTag(any) === 'Context'

export default anyIsContext
