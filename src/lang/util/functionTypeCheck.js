import anyResolveWith from './anyResolveWith'
import buildException from './buildException'
import fnGetMeta from './fnGetMeta'

/**
 * Wrap the given function with another function that will check the types of
 * the Parameters and the return type.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to wrap.
 * @return {Function} The new type checked function.
 * @example
 *
 * const func = functionTypeCheck(
 *   definitionToFn((foo, bar) => {}, [Number, Number])
 * )
 * func('foo', 123)
 * //=> throws TypeError
 *
 * const func = functionTypeCheck(
 *   definitionToFn(() => 'foo', [() => Number])
 * )
 * func()
 * //=> throws TypeError
 */
const functionTypeCheck = (fn, func) => {
  const meta = fnGetMeta(fn)
  const { parameters, partial, returns } = meta
  return function() {
    if (parameters) {
      const { length } = arguments
      let idx = 0
      let done = false
      while (idx < length && !done) {
        const arg = arguments[idx]
        const parameter = parameters[idx]
        if (parameter) {
          if (!parameter.type.is(arg)) {
            throw buildException(fn)
              .expected.arg(arguments, idx)
              .toMatchParameter(parameter)
          }
        } else {
          done = true
        }
        idx += 1
      }
      if (arguments.length < parameters.length && !partial) {
        throw buildException(fn)
          .expected.arguments(arguments)
          .toBeOfMinLength(parameters.length)
      }
    }
    const returned = func.apply(this, arguments)
    if (returns) {
      return anyResolveWith(returned, (resolvedReturned) => {
        if (!returns.is(resolvedReturned)) {
          throw buildException(fn)
            .expected.returned(resolvedReturned)
            .toMatchReturns(returns)
        }
        return resolvedReturned
      })
    }
    return returned
  }
}

export default functionTypeCheck
