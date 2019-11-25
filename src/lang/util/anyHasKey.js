import anyIsFunction from './anyIsFunction'

/**
 * Checks the given `any` for key `key`
 *
 * @private
 * @function
 * @category lang.util
 * @since v0.1.0
 * @param {*} any The value to check for 'key'.
 * @param {Key} key The key to check `any` for
 * @returns {boolean} Returns true if the given `any` is Keyed and has `key`
 * @example
 *
 * anyHasKey('foo', new Map([['foo', 'bar']]))
 * //=> true
 *
 * anyHasKey('foo', {foo: 'bar'}) // Objects are not keyed, they have properties
 * //=> false
 */
const anyHasKey = (any, key) => {
  if (any && anyIsFunction(any.has)) {
    return any.has(key)
  }
  return false
}

export default anyHasKey
