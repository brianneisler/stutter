import definitionToParametersAndReturns from './definitionToParametersAndReturns'
import functionGetParameterNames from './functionGetParameterNames'

const fnCastWithDefinition = (fn, definition) => {
  const parameterNames = functionGetParameterNames(fn.func)
  const { parameters, returns } = definitionToParametersAndReturns(definition, parameterNames)
  return fn.update({ parameters, returns })
}

export default fnCastWithDefinition
