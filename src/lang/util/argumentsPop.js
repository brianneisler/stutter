import argumentsToArray from './argumentsToArray'
import arrayToArguments from './arrayToArguments'

const argumentsPop = (args) => {
  if (args.length === 0) {
    return args
  }
  const array = argumentsToArray(args)
  array.pop()
  return arrayToArguments(array)
}

export default argumentsPop
