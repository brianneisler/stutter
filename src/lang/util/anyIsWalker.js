import anyIsFunction from './anyIsFunction'

/**
 * Checks if `any` is a `Walker`. A `Walker` is classified as having properties
 * named `next`, `previous`, `down` and `up` that are a functions.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a `Walker`
 * @example
 *
 * const array = []
 * anyIsWalker(walker(array))
 * //=> true
 *
 * anyIsWalker({
 *   down: () => {},
 *   next: () => {},
 *   previous: () => {},
 *   up: () => {}
 * })
 * //=> true
 */
const anyIsWalker = (value) =>
  value != null &&
  anyIsFunction(value.next) &&
  anyIsFunction(value.previous) &&
  anyIsFunction(value.down) &&
  anyIsFunction(value.up)

export default anyIsWalker
