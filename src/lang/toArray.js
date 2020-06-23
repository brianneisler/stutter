import Array from './types/Array'
import defn from './defn'
import to from './to'

/**
 * Converts `any` to an `Array`.
 *
 * @function
 * @since 0.0.21
 * @category lang
 * @param {*} any The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 })
 * // => [1, 2]
 *
 * toArray('abc')
 * // => ['a', 'b', 'c']
 *
 * toArray(1)
 * // => []
 *
 * toArray(null)
 * // => []
 */
const toArray = defn('lang.toArray', to(Array))

export default toArray
