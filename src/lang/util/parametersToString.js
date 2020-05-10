import parameterToString from './parameterToString'

const parametersToString = (parameters) => {
  return `[${parameters.map(parameterToString).join(', ')}]`
}

export default parametersToString
