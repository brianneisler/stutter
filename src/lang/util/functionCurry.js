import anyIsPlaceholder from './anyIsPlaceholder'
import arrayClone from './arrayClone'
import arrayConcat from './arrayConcat'
import arrayMap from './arrayMap'
import arraySlice from './arraySlice'
import buildException from './buildException'
import functionCopyMeta from './functionCopyMeta'
import functionDefineParameters from './functionDefineParameters'
import functionsToMultiFunction from './functionsToMultiFunction'
import objectDefineProperty from './objectDefineProperty'

const identity = (arg) => arg

const curryParameterizedFunction = (
  func,
  wrap = identity,
  parameters = func.parameters,
  placeholders = [],
  received = []
) => {
  const override = wrap(
    functionCopyMeta(function() {
      const { length } = arguments
      if (length === 0) {
        throw buildException(func)
          .expected.arguments(arguments)
          .not.toBeEmpty()
      }
      let idx = -1
      let newPlaceholders = []
      let newParameters = []
      const newReceived = arrayClone(received)
      while (++idx < length) {
        const arg = arguments[idx]
        const parameter = parameters[idx]
        const placeholder = placeholders[idx]

        if (anyIsPlaceholder(arg)) {
          if (placeholder != null) {
            // A placeholder was passed for a placeholder. Preserve the index in
            // this case.
            newPlaceholders.push(placeholder)
          } else {
            newPlaceholders.push(idx)
            newReceived.push(arg)
          }
          newParameters.push(parameter)
        } else {
          if (parameter && !parameter.type.is(arg)) {
            throw buildException(func)
              .expected.arg(arguments, idx)
              .toMatchParameter(parameter)
          }
          if (placeholder != null) {
            newReceived[placeholder] = arg
          } else {
            newReceived.push(arg)
          }
        }
      }

      if (length < placeholders.length) {
        newPlaceholders = arrayConcat(newPlaceholders, arraySlice(placeholders, length))
      }
      if (length < parameters.length) {
        newParameters = arrayConcat(newParameters, arraySlice(parameters, length))
        return curryParameterizedFunction(func, wrap, newParameters, newPlaceholders, newReceived)
      } else if (newPlaceholders.length > 0) {
        return curryParameterizedFunction(func, wrap, newParameters, newPlaceholders, newReceived)
      }
      return func.apply(this, newReceived)
    }, func)
  )
  const cFunc = functionDefineParameters(functionCopyMeta(override, func), parameters)
  objectDefineProperty(cFunc, 'curried', { value: true, configurable: true })
  return cFunc
}

const findExactMatch = (matches) => {
  const { length } = matches
  let idx = -1
  while (++idx < length) {
    const match = matches[idx]
    if (!match.partial) {
      return match
    }
  }
}

const curryMultiFunction = (func, wrap) => {
  const override = wrap(function() {
    const matches = func.dispatcher.dispatch(arguments, { partial: true, multi: true })
    const exactMatch = findExactMatch(matches)
    if (exactMatch) {
      return exactMatch.func.apply(this, arguments)
    }
    return curryMultiFunction(
      functionsToMultiFunction(
        arrayMap(matches, (match) => {
          if (match.func.curried) {
            return match.func.apply(this, arguments)
          }
          return curryParameterizedFunction(match.func).apply(this, arguments)
        })
      ),
      wrap
    )
  })
  functionCopyMeta(override, func)
  objectDefineProperty(override, 'curried', { value: true, configurable: true })
  return override
}

/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one at
 * a time. If `f` is a ternary function and `g` is `curry(f)`, the following
 * are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`__`](#__), the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 * const addFourNumbers = (a, b, c, d) => a + b + c + d
 *
 * const curriedAddFourNumbers = functionCurry(addFourNumbers)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const functionCurry = (func, wrap = identity) => {
  if (func.dispatcher) {
    return curryMultiFunction(func, wrap)
  }
  if (func.parameters) {
    if (func.parameters.length === 0) {
      // Function accepts no parameters, do not apply currying
      return wrap(func)
    }
    return curryParameterizedFunction(func, wrap)
  }
  throw new Error('Function must either be a multi function or a parameterized function')
}

export default functionCurry
