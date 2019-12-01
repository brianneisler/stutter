import { Any } from '../lang/types'
import defn from '../lang/defn'

/**
 * Evaluates expressions one at a time, from left to right. If an expression returns logical
 * false, that that value is returned, otherwise it returns the value of the
 * last expression (which is logically true).
 *
 * This method resolves both parameters before executing.
 *
 * This method will automatically upgrade to async if a Promise is received for either value.
 *
 * This method will automatically upgrade to a generator if a Generator is received for either value.
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
 * and(null, false)
 * //=> null
 *
 * and([], {})
 * //=> {}
 *
 * await and(Promise.resolve(false), false)
 * //=> false
 */
const and = defn(
  'logic.and',
  'Evaluates expressions one at a time, from left to right. If an expression returns logical false, that that value is returned, otherwise it returns the value of the last expression (which is logically true).',

  [Any, Any, () => Any],
  (valueA, valueB) => valueA && valueB
)

export default and
