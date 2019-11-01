import Any from '../types/Any'
import Fn from './js/Fn'
import Parameter from './js/Parameter'
import anyIsFunction from './anyIsFunction'
import anyIsType from './anyIsType'
import findTypeForClass from './findTypeForClass'
import functionGetParameterNames from './functionGetParameterNames'

/**
 * Set `parameters` and `returns` type definitions for the given `fn`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} fn The Fn to set the given type definitions on.
 * @param {Array} definition The Parameter and Return type definitions to set on the Fn.
 * @returns {Fn} The function passed in `func` with parameters attached.
 * @example
 *
 * const fn = buildFn((foo, bar) => 123)
 * fnSetDefinition(fn, [Any, String, () => Number])
 * //=> Fn {
 * //   paramters: [
 * //     { name: 'foo', type: Any },
 * //     { name: 'bar', type: String },
 * //   ],
 * //   returns: Number
 * //   func: (foo, bar) => 123
 * // }
 */
const fnSetDefinition = (fn, definition = []) => {
  const parameterNames = functionGetParameterNames(fn.func)
  const parameters = []
  let returns = Any
  const length =
    definition.length >= parameterNames.length ? definition.length : parameterNames.length
  let index = 0
  while (index < length) {
    const name = parameterNames[index] || `arg${index}`
    let type = definition[index]
    if (type) {
      if (!anyIsType(type)) {
        if (!anyIsFunction(type)) {
          throw new Error(
            `fnSetDefinition expected a Type for parameter '${name}' but instead was given ${type}`
          )
        }

        // Look for an existing type in all Namespaces that has this
        // function as a class. If one is found, set that Type to the `type`
        // variable.
        const found = findTypeForClass(type)
        if (found) {
          type = found
        } else {
          // If a matching class cannot be found, execute the function with no
          // parameters. If the returned value is a type, then this is the return
          // type. Set the returned value as the return type.
          const returnedReturnType = type()
          if (anyIsFunction(returnedReturnType)) {
            returns = findTypeForClass(returnedReturnType)
          } else {
            returns = returnedReturnType
          }
          if (!anyIsType(returns)) {
            throw new Error(
              `parameterizeFunction expected return type to be a function that returns a Type. Instead this value was returned ${returnedReturnType}`
            )
          }
          // If there are no more parameter names then this is not a parameter
          if (index >= parameterNames.length) {
            type = null
          } else {
            type = Any
          }
        }
      }
    } else {
      type = Any
    }
    if (type) {
      parameters.push(new Parameter(name, type))
    }
    index += 1
  }
  return new Fn(fn.func, {
    ...fn.meta,
    parameters,
    returns
  })
}

export default fnSetDefinition
