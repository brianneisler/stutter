import fnGetMeta from './fnGetMeta'
import parametersToString from './parametersToString'
import sourceToString from './sourceToString'

const fnToSignatureString = (fn) => {
  const { parameters } = fnGetMeta(fn)
  if (parameters) {
    return `${sourceToString(fn)}:${parametersToString(parameters)}`
  }
  return `${sourceToString(fn)}`
}

export default fnToSignatureString
