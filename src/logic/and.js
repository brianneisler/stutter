import { Any } from '../lang/types'
import defn from '../lang/defn'

/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * This method resolves both parameters before executing.
 *
 * This method will automatically upgrade to async if a Promise is received for either value.
 *
 * @function
 * @since v0.1.0
 * @category logic
 * @param {*} valueA
 * @param {*} valueB
 * @returns {*} the first argument if it is falsy, otherwise the second argument.
 * @example
 *
 * and(true, true)
 * //=> true
 *
 * and(true, false)
 * //=> false
 *
 * and(false, true)
 * //=> false
 *
 * and(false, false)
 * //=> false
 *
 * await and(Promise.resolve(false), false)
 * //=> false
 */
const and = defn('logic.and', [Any, Any], (valueA, valueB) => valueA && valueB)

export default and
