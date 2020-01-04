import Any from '../types/Any'
import Parameter from './js/Parameter'
import anyIsFunction from './anyIsFunction'
import anyIsProtocol from './anyIsProtocol'
import anyIsType from './anyIsType'
import findTypeForClass from './findTypeForClass'

const definitionToParametersAndReturns = (definition, parameterNames) => {
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
  return {
    parameters,
    returns
  }
}

export default definitionToParametersAndReturns
