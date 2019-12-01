import Any from './types/Any'
import Fn from './types/Fn'
import anyAlways from './util/anyAlways'
import defn from './defn'
import fn from './fn'

/**
 * Returns an `Fn` that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.
 *
 * Aliases: [`constantly`](#constantly)
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {*} value The value to wrap in a function
 * @returns {Function} A function that always returns the given value
 * @example
 *
 * const foo = always('foo')
 * foo()
 * //=> 'foo'
 */
const always = defn(
  'lang.always',
  'Returns an `Fn` that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.',

  [Any, () => Fn],
  (value) => fn([() => Any], anyAlways(value))
)

export default always
