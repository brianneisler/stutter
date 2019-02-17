import { Any } from './types'
import { anyResolve } from './util'
import defn from './defn'

/**
 * Resolves a value.
 *
 * If the value is a Promise, this will return a Promise that will then resolve
 * the returned value.
 *
 * Dispatches to the resolve method if it exists. If a resolve method returns a
 * value that is also resolvable, this method will resolve that value as well.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to resolve.
 * @returns {*} The resolved value.
 * @example
 *
 * resolve('foo')
 * // => 'foo'
 *
 * resolve({
 *  resolve: () => 'bar'
 * })
 * //=> bar
 *
 * resolve({
 *   resolve: () => ({
 *     resolve: () => 'bar'
 *   })
 * }) /
 * /=> bar
 */
const resolve = defn([Any], (any) => anyResolve(any))

export default resolve
