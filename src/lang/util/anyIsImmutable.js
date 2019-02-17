import Immutable from 'immutable'

/**
 * Returns true if `value` is an Immutable Collection or Record.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an Immutable Collection or Record.
 * @example
 *
 * anyIsImmutable([])
 * //=> false
 *
 * anyIsImmutable({})
 * //=> false
 *
 * anyIsImmutable(Map())
 * //=> true
 *
 * anyIsImmutable(List())
 * //=>  true
 *
 * anyIsImmutable(Stack())
 * //=> true
 *
 * anyIsImmutable(Map().asMutable())
 * //=> true
 */
const anyIsImmutable = Immutable.isImmutable

export default anyIsImmutable
