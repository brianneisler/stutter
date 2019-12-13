import anyIsFunction from './anyIsFunction'
import anyIsPromise from './anyIsPromise'
import anyResolve from './anyResolve'
import anyResolveToGenerator from './anyResolveToGenerator'

/**
 * Resolves an unresolved value.
 *
 * If the value is a `Promise`, this will return a Promise that will then resolve
 * the returned value.
 *
 * Dispatches to the `resolve` method if it exists. If a resolve method returns
 * a value that is also resolvable, this method will resolve that value as
 * well.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to resolve.
 * @returns {*} The resolved value.
 * @example
 *
 * unresolvedResolve(Promise.resolve('foo'))
 * // => Promise('foo')
 *
 * anyResolve({
 *  resolve: () => 'bar'
 * })
 * //=> bar
 *
 * anyResolve({
 *   resolve: () => ({
 *     resolve: () => 'bar'
 *   })
 * })
 * //=> bar
 */
const unresolvedResolve = (unresolved) => {
  if (anyIsPromise(unresolved)) {
    return unresolved.then((resolved) => anyResolve(resolved))
  }
  if (anyIsFunction(unresolved.resolve)) {
    return anyResolve(unresolved.resolve())
  }
  return anyResolveToGenerator(unresolved)
}

export default unresolvedResolve
