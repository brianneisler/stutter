import argumentsToArray from './argumentsToArray'
import arrayToArguments from './arrayToArguments'

const argumentsShift = (args) => {
  if (args.length === 0) {
    return args
  }
  const array = argumentsToArray(args)
  array.shift()
  return arrayToArguments(array)
}

export default argumentsShift
