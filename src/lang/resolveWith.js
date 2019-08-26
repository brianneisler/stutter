import { Any, Function } from './types'
import { anyResolveWith } from './util'
import defn from './defn'

/**
 * Resolves a value to the given method.
 *
 * If the value to be resolved is a promise then this method will return a promise. The fn method will be triggered once the promise resolves.
 *
 * If the value to be resolved is a generator, this method will return a generator.
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {Function} fn The function to execute at the end of the resolution
 * @param {*} value The value to resolve with the generator
 * @returns {Generator}
 * @example
 *
 * await resolveWith(
 *   (resolvedValue) => 'bar' // resolvedValue == 'foo'
 *   Promise.resolve('foo')
 * ) //=> 'bar'
 *
 * resolveWith(
 *   (resolvedValue) => 'bar' // resolvedValue == 'foo'
 *   'foo'
 * ) //=> 'bar'
 */
const resolveWith = defn(
  [Any, Function],
  (any, func) => anyResolveWith(any, func),

  [Function, Any],
  (func, any) => anyResolveWith(func, any)
)

export default resolveWith
