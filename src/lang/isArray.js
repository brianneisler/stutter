import anyIsArray from './util/anyIsArray'
import defn from './defn'

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * isArray([1, 2, 3])
 * //=> true
 *
 * isArray(document.body.children)
 * //=> false
 *
 * isArray('abc')
 * //=> false
 *
 * isArray(noop)
 * //=> false
 */
const isArray = defn('isArray', anyIsArray)

export default isArray
