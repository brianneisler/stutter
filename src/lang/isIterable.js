import { anyIsIterable } from './util'
import defn from './defn'

/**
 * Checks if `any` implements the iterator symbol or is iterable
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is iterable, else `false`.
 * @example
 *
 * isIterable('abc')
 * //=> true
 *
 * isIterable(new Map())
 * //=> true
 *
 * isIterable({})
 * //=> false
 *
 * isIterable([])
 * //=> true
 */
const isIterable = defn('isIterable', anyIsIterable)

export default isIterable
