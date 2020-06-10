import anyIsArguments from './anyIsArguments'
import argumentsToArray from './argumentsToArray'
import arrayEquals from './arrayEquals'
import arrayToArguments from './arrayToArguments'

const argumentsEquals = (args, value) => {
  if (!anyIsArguments(value)) {
    return false
  }
  arrayEquals(argumentsToArray(args))
}

export default argumentsEquals
