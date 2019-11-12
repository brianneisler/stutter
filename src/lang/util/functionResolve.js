import anyResolveAllWith from './anyResolveAllWith'

/**
 * Wrap the given function with another function that will resolve the
 * parameters of the function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to wrap.
 * @return {Function} The new resolving function.
 * @example
 *
 * const func = functionResolve((foo, bar) => {
 *   foo //=> 'abc'
 *   bar //=> 123
 * })
 * await func(Promise.resolve('foo'), 123)
 */
const functionResolve = (func) =>
  function() {
    return anyResolveAllWith(arguments, (resolvedArgs) => func.apply(this, resolvedArgs))
  }

export default functionResolve
