import curry from './curry'
import defn from './defn'

const baseAlways = (value) => {
  return function() {
    return value
  }
}

/**
 * Returns a function that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.
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
 * foo() //=> 'foo'
 */
const always = curry(defn('always', baseAlways))

export default always

export { baseAlways }
