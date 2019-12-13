import Any from './types/Any'
import defn from './defn'

/**
 * @since v0.1.0
 * @param {*} value The value to return.
 * @return {*} The input value.
 * @example
 *
 * identity(1)
 * //=> 1
 *
 * const obj = {}
 * identity(obj) === obj
 * //=> true

 * identity()
 * //=> undefined
 */
const identity = defn(
  'identity',
  'A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.',

  [Any, () => Any],
  (value) => value
)

export default identity
