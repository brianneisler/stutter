import anyIsArguments from './anyIsArguments'
import arrayLikeEquals from './arrayLikeEquals'

const argumentsEquals = (args, value, ...rest) => {
  if (!anyIsArguments(value)) {
    return false
  }
  return arrayLikeEquals(args, value, ...rest)
}

export default argumentsEquals
