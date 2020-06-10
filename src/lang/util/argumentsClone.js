import argumentsToArray from './argumentsToArray'
import arrayClone from './arrayClone'
import arrayToArguments from './arrayToArguments'

const argumentsClone = (args) =>
  arrayToArguments(arrayClone(argumentsToArray(args)))

export default argumentsClone
