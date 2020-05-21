import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is an `Element`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is an `Element` object, else `false`.
 * @example
 *
 * anyIsElement(new Element(...))
 * // => true
 *
 * anyIsElement(() => {})
 * // => false
 */
const anyIsElement = (any) => anyToStringTag(any) === 'Element'

export default anyIsElement
