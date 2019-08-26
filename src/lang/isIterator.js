import { anyIsIterator } from './util'
import defn from './defn'

/**
 * Checks if `any` is an Iterator. An Iterator is classified as having a property named `next` that is a plain function.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is an Iterator
 * @example
 *
 * const array = []
 * isIterator(array[Symbol.iterator])
 * //=> true
 *:
 * isIterator({
 *   next: () => {}
 * })
 * //=> true
 */
const isIterator = defn('isIterator', anyIsIterator)

export default isIterator
