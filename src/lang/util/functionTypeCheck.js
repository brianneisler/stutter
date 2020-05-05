import anyMatchesParameter from './anyMatchesParameter'
import anyResolveWith from './anyResolveWith'
import buildException from './buildException'

/**
 * Wrap the given function with another function that will check the types of
 * the Parameters and the return type.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to type check.
 * @param {{ parameters: Array<Parameter>, partial: boolean, returns: Type }} meta The meta values to use to type check
 * @return {Function} The new type checked function.
 * @example
 *
 * const func = functionTypeCheck(
 *   (foo, bar) => {},
 *   {
 *     parameters: [
 *       new Parameter('foo', Number),
 *       new Parameter('bar', Number)
 *     ]
 *   }
 * )
 * func('foo', 123)
 * //=> throws TypeError
 *
 * const func = functionTypeCheck(
 *   () => 'foo',
 *   {
 *     returns: Number
 *   }
 * )
 * func()
 * //=> throws TypeError
 */
const functionTypeCheck = (func, meta) => {
  const { parameters, partial, resolve, returns } = meta
  if (!parameters && !returns) {
    return func
  }
  return function () {
    if (parameters) {
      const { length } = arguments
      let idx = 0
      let done = false
      while (idx < length && !done) {
        const arg = arguments[idx]
        const parameter = parameters[idx]
        if (parameter) {
          if (!anyMatchesParameter(arg, parameter, meta)) {
            throw buildException(func).expected.arg(arguments, idx).toMatchParameter(parameter)
          }
        } else {
          done = true
        }
        idx += 1
      }
      if (arguments.length < parameters.length && !partial) {
        throw buildException(func).expected.arguments(arguments).toBeOfMinLength(parameters.length)
      }
    }
    const returned = func.apply(this, arguments)
    if (returns) {
      if (resolve) {
        return anyResolveWith(returned, (resolvedReturned) => {
          if (!returns.is(resolvedReturned, meta)) {
            throw buildException(func).expected.returned(resolvedReturned).toMatchReturns(returns)
          }
          return resolvedReturned
        })
      }
      if (!returns.is(returned, meta)) {
        throw buildException(func).expected.returned(returned).toMatchReturns(returns)
      }
      return returned
    }
    return returned
  }
}

export default functionTypeCheck
