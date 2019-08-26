import { anyIsImmutableCollection } from './util'
import defn from './defn'

/**
 * Returns `true` if `any` is a `Collection`, or any of its subclasses.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a `Collection`, or any of its subclasses.
 * @example
 * isImmutableCollection([])
 * //=> false
 *
 * isImmutableCollection({})
 * //=> false
 *
 * isImmutableCollection(Map())
 * //=> true
 *
 * isImmutableCollection(List())
 * //=> true
 *
 * isImmutableCollection(Stack())
 * //=> true
 */
const isImmutableCollection = defn('isImmutableCollection', anyIsImmutableCollection)

export default isImmutableCollection
