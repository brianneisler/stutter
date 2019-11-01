import anyIsGenerator from './anyIsGenerator'
import anyIsOp from './anyIsOp'
import anyIsPromise from './anyIsPromise'
import anyIsResolved from './anyIsResolved'
import anyResolve from './anyResolve'
import anyResolveToGeneratorWith from './anyResolveToGeneratorWith'

/**
 * Resolves a value to the given method.
 *
 * If the value to be resolved is a promise then this method will return a promise. The fn method will be triggered once the promise resolves.
 *
 * If the value to be resolved is a generator, this method will return a generator.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to resolve with the generator
 * @param {Function} func The function to execute at the end of the resolution
 * @returns {Generator}
 * @example
 *
 * await anyResolveWith(
 *   (resolvedValue) => 'bar', // resolvedValue == 'foo'
 *   Promise.resolve('foo')
 * )
 * //=> 'bar'
 *
 * anyResolveWith(
 *   (resolvedValue) => 'bar', // resolvedValue == 'foo'
 *   'foo'
 * )
 * //=> 'bar'
 */
const anyResolveWith = (any, func) => {
  if (!anyIsResolved(any)) {
    if (anyIsPromise(any)) {
      return any.then((resolved) => anyResolveWith(resolved, func))
    }
    if (anyIsGenerator(any) || anyIsOp(any)) {
      return anyResolveToGeneratorWith(any, func)
    }
    any = anyResolve(any)
  }
  any = func(any)
  if (!anyIsResolved(any)) {
    return anyResolve(any)
  }
  return any
}

export default anyResolveWith