import anyIsFunction from './anyIsFunction'
import anyIsObject from './anyIsObject'
import anyResolveWith from './anyResolveWith'

/**
 * Resolves all async values in an array or object
 *
 * Auto curried for placeholder support.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} value The array or object whose values should be resolved. If value is not an object or array, the value is simply resolved to itself
 * @returns {*} The array or object with its values resolved
 * @example
 *
 * const nums = [
 *   1,
 *   Promise.resolve(2),
 *   (async () => 3)()
 * ]
 * await anyResolveAll(nums)
 * //=> [ 1, 2, 3 ]
 *
 * const keyed = {
 *   a: 1,
 *   b: Promise.resolve(2),
 *   c: (async () => 3)()
 * }
 * await anyResolveAll(keyed)
 * //=> { a: 1, b: 2, c: 3 }
 *
 * await anyResolveAll('abc')
 * //=> 'abc'
 *
 * await anyResolveAll(123)
 * //=> 123
 */

// TODO BRN: Add support for all data types by having this receive a
// iterateFunc and setFunc
// TODO BRN: setFunc should be a setting function that mutates the object
// instead of immutable modifications
const anyResolveAll = (any, iterateFunc, setFunc) =>
  anyResolveWith(any, (resolvedAny) => {
    if (!anyIsObject(resolvedAny) || anyIsFunction(resolvedAny)) {
      return resolvedAny
    }
    let result = any
    return iterateFunc(resolvedAny, (next) => {
      if (next.done) {
        return {
          ...next,
          value: result
        }
      }
      return anyResolveWith(next.value, (nextValue) => {
        result = setFunc(result, next.kdx, nextValue)
        return next
      })
    })
  })

export default anyResolveAll
