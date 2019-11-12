import anyIsArguments from './anyIsArguments'
import anyIsArray from './anyIsArray'
import anyIsFunction from './anyIsFunction'
import anyIsIterator from './anyIsIterator'
import anyIsObject from './anyIsObject'
import anyIterate from './anyIterate'
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
const anyResolveAll = (any) =>
  anyResolveWith(any, (resolvedAny) => {
    // TODO BRN: Add support for immutable objects here
    let result
    if (anyIsArray(resolvedAny) || anyIsArguments(resolvedAny) || anyIsIterator(resolvedAny)) {
      result = []
    } else if (anyIsObject(resolvedAny) && !anyIsFunction(resolvedAny)) {
      result = {}
    } else {
      return resolvedAny
    }

    return anyIterate(resolvedAny, (next) => {
      if (next.done) {
        return {
          ...next,
          value: result
        }
      }
      return anyResolveWith(next.value, (nextValue) => {
        result[next.kdx] = nextValue
        return next
      })
    })
  })

export default anyResolveAll
