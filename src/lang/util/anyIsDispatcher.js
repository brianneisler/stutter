import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is an `Dispatcher`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is an `Dispatcher` object, else `false`.
 * @example
 *
 * anyIsDispatcher(new Dispatcher(...))
 * // => true
 *
 * anyIsDispatcher(() => {})
 * // => false
 */
const anyIsDispatcher = (any) => anyToStringTag(any) === 'Dispatcher'

export default anyIsDispatcher
