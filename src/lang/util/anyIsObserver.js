import anyIsFunction from './anyIsFunction'

/**
 * Checks whether the given value is an Observer.
 *
 * @private
 * @function
 * @since v0.2.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is an `Observer`, else `false`.
 * @example
 *
 * anyIsObserver({
 *   next: () => {},
 *   error: () => {},
 *   complete: () => {}
 * }))
 * //=> true
 *
 * anyIsObserver({})
 * //=> false
 */
const anyIsObserver = (any) =>
  any != null &&
  anyIsFunction(any.next) &&
  anyIsFunction(any.error) &&
  anyIsFunction(any.complete)

export default anyIsObserver
