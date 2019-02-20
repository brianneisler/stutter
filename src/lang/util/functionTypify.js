import Any from '../types/Any'
import Parameter from './js/Parameter'
import anyIsFunction from './anyIsFunction'
import anyIsType from './anyIsType'
import findTypeForClass from './findTypeForClass'
import functionDefineParameters from './functionDefineParameters'
import functionDefineReturns from './functionDefineReturns'
import functionGetParameterNames from './functionGetParameterNames'

/**
 * Apply parameter and return types to a function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to parameterize.
 * @param {Array} definitions The type definitions to apply to the function.
 * @return {Function} The function passed in `func` with parameters attached.
 * @example
 *
 * functionTypify((foo, bar) => 123, [Any, String, () => Number])
 * //=> Function {
 * //   paramters: [
 * //     { name: 'foo', type: Any },
 * //     { name: 'bar', type: String },
 * //   ],
 * //   length: 2,
 * //   returns: Number
 * // }
 *
 * functionTypify((foo, bar) => {})
 * //=> Function {
 * //   paramters: [
 * //     { name: 'foo', type: Any },
 * //     { name: 'bar', type: Any },
 * //   ],
 * //   length: 2,
 * //   returns: Any
 * // }
 */
const functionTypify = (func, definitions) => {
  if (func.parameters || func.dispatcher) {
    if (definitions) {
      throw new Error(`Trying to parameterize an already parametered function ${func}`)
    }
    return func
  }
  const parameterNames = functionGetParameterNames(func)
  const parameters = []
  let returnType = Any
  definitions = definitions || []
  const length =
    definitions.length >= parameterNames.length ? definitions.length : parameterNames.length
  let index = 0
  while (index < length) {
    const name = parameterNames[index] || `arg${index}`
    let type = definitions[index]
    if (type) {
      if (!anyIsType(type)) {
        if (!anyIsFunction(type)) {
          throw new Error(
            `functionTypify expected a Type for parameter '${name}' but instead was given ${type}`
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
            returnType = findTypeForClass(returnedReturnType)
          } else {
            returnType = returnedReturnType
          }
          if (!anyIsType(returnType)) {
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
  return functionDefineReturns(functionDefineParameters(func, parameters), returnType)
}

export default functionTypify
