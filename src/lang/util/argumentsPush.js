import argumentsToArray from './argumentsToArray'
import arrayToArguments from './arrayToArguments'

const argumentsPush = (args, any) => {
  const array = argumentsToArray(args)
  array.push(any)
  return arrayToArguments(array)
}

export default argumentsPush
