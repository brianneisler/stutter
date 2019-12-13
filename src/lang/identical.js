import Any from './types/Any'
import Boolean from './types/Boolean'
import anyIdenticalWithAny from './util/anyIdenticalWithAny'
import defn from './defn'

/**
 * Returns true if its arguments are identical, false otherwise. Values are identical if they reference the same memory. `NaN` is identical to `NaN`; `0` and `-0` are not identical.
 *
 *  [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) polyfill to avoid requiring consumers ship their own
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {*} valueA
 * @param {*} valueB
 * @returns {Boolean}
 * @example
 *
 * const o = {}
 * identical(o, o) //=> true
 * identical(1, 1) //=> true
 * identical(1, '1') //=> false
 * identical([], []) //=> false
 * identical(0, -0) //=> false
 * identical(NaN, NaN) //=> true
 */
const identical = defn(
  'identical',
  'Returns true if its arguments are identical, false otherwise. Values are identical if they reference the same memory. `NaN` is identical to `NaN`; `0` and `-0` are not identical.',

  [Any, Any, () => Boolean],
  anyIdenticalWithAny
)

export default identical
