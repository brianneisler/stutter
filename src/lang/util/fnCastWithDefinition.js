import definitionToParametersAndReturns from './definitionToParametersAndReturns'
import fnGetFunc from './fnGetFunc'
import functionGetParameterNames from './functionGetParameterNames'

const fnCastWithDefinition = (fn, definition) => {
  const parameterNames = functionGetParameterNames(fnGetFunc(fn))
  const { parameters, returns } = definitionToParametersAndReturns(definition, parameterNames)
  return fn.update({ parameters, returns })
}

export default fnCastWithDefinition
