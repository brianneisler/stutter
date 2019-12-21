import Any from '../types/Any'
import Parameter from './js/Parameter'
import anyIsFunction from './anyIsFunction'
import anyIsProtocol from './anyIsProtocol'
import anyIsType from './anyIsType'
import buildFn from './buildFn'
import findTypeForClass from './findTypeForClass'
import functionGetParameterNames from './functionGetParameterNames'

/**
 * Builds an `Fn` using the given function and `definition`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The func to wrap in an `Fn`.
 * @param {Array} definition The defintion of parameters for this `Fn`
 * @returns {Function} A function with a Symbol('@@fn') pointing to the new `Fn` instance
 * @example
 *
 * const arrayWrap = definitionToFn(
 *   (foo) => [ foo ],
 *   [Any, () => Array]
 * )
 *
 * arrayWrap('foo')
 * // => [ 'foo' ]
 *
 * arrayWrap[SYMBOL_FN]
 * // => Fn {
 * //   func: (foo) => [ foo ],
 * //   meta: {
 * //     parameters: [
 * //       Parameter {
 * //         name: 'foo',
 * //         type: Any
 * //       }
 * //     ],
 * //     returns: Array
 * //   }
 * // }
 *
 * arrayWrap.length
 * // => 1
 */
const definitionToFn = (func, definition = [], meta = {}) => {
  if (!anyIsFunction(func)) {
    throw new TypeError('Expected `func` to be a Function')
  }

  const parameterNames = functionGetParameterNames(func)
  const parameters = []
  let returns = Any
  const length =
    definition.length >= parameterNames.length ? definition.length : parameterNames.length
  let index = 0
  while (index < length) {
    const name = parameterNames[index] || `arg${index}`
    let type = definition[index]
    if (type) {
      if (!anyIsType(type) && !anyIsProtocol(type)) {
        if (!anyIsFunction(type)) {
          throw new Error(
            `definitionToFn expected a Type or Protocol for parameter '${name}' but instead was given ${type}`
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
          if (!anyIsType(returns) && !anyIsProtocol(returns)) {
            throw new Error(
              `parameterizeFunction expected return type to be a function that returns a Type or a Protocol. Instead this value was returned ${returnedReturnType}`
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
  return buildFn(func, {
    ...meta,
    parameters,
    returns
  })
}

export default definitionToFn
