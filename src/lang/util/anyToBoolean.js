import anyIsFunction from './anyIsFunction'

/**
 * Converts `any` to a plain object flattening inherited enumerable string keyed properties of `value` to own properties of the plain object.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * assign({ 'a': 1 }, new Foo)
 * // => { 'a': 1, 'b': 2 }
 *
 * assign({ 'a': 1 }, anyToObject(new Foo))
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
const anyToBoolean = (any) => {
  if (any != null && anyIsFunction(any.toBoolean)) {
    return any.toBoolean()
  }
  return !!any
}

export default anyToBoolean
