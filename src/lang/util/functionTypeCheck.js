import anyResolveWith from './anyResolveWith'
import buildException from './buildException'
import functionCopyMeta from './functionCopyMeta'

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
 *   functionDefineTypes((foo, bar) => {}, [Number, Number])
 * )
 * func('foo', 123)
 * //=> throws TypeError
 *
 * const func = functionTypeCheck(
 *   functionDefineTypes(() => 'foo', [() => Number])
 * )
 * func()
 * //=> throws TypeError
 */
const functionTypeCheck = (func) => {
  if (func.parameters || func.returns) {
    const override = function() {
      const { parameters } = func
      if (parameters) {
        const { length } = arguments
        let idx = 0
        let done = false
        while (idx < length && !done) {
          const arg = arguments[idx]
          const parameter = parameters[idx]
          if (parameter) {
            if (!parameter.type.is(arg)) {
              throw buildException(func)
                .expected.arg(arguments, idx)
                .toMatchParameter(parameter)
            }
          } else {
            done = true
          }
          idx += 1
        }
        if (arguments.length < parameters.length) {
          throw buildException(func)
            .expected.arguments(arguments)
            .toBeOfMinLength(parameters.length)
        }
      }
      const returned = func.apply(this, arguments)
      const { returns } = func
      if (returns) {
        return anyResolveWith(returned, (resolvedReturned) => {
          if (!returns.is(resolvedReturned)) {
            throw buildException(func)
              .expected.returned(resolvedReturned)
              .toMatchReturns(func.returns)
          }
          return resolvedReturned
        })
      }
      return returned
    }
    return functionCopyMeta(override, func)
  }
  return func
}

export default functionTypeCheck
