import argumentsToArray from './argumentsToArray'
import arrayToArguments from './arrayToArguments'

const argumentsUnshift = (args, any) => {
  const array = argumentsToArray(args)
  array.unshift(any)
  return arrayToArguments(array)
}

export default argumentsUnshift
