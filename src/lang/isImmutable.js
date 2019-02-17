import { anyIsImmutable } from './util'
import defn from './defn'

/**
 * Returns true if `any` is an Immutable Collection or Record.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is an Immutable Collection or Record.
 * @example
 * isImmutable([])
 * //=> false
 *
 * isImmutable({})
 * //=> false
 *
 * isImmutable(Map())
 * //=> true
 *
 * isImmutable(List())
 * //=>  true
 *
 * isImmutable(Stack())
 * //=> true
 *
 * isImmutable(Map().asMutable())
 * //=> true
 */
const isImmutable = defn('isImmutable', anyIsImmutable)

export default isImmutable
