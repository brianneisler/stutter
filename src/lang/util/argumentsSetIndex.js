import anyIdenticalWithAny from './anyIdenticalWithAny'
import argumentsClone from './argumentsClone'
import argumentsGetIndex from './argumentsGetIndex'

const argumentsSetIndex = (args, index, value) => {
  const current = argumentsGetIndex(args, index)
  if (anyIdenticalWithAny(current, value) && index < args.length) {
    return args
  }
  const clone = argumentsClone(args)
  clone[index] = value
  return clone
}

export default argumentsSetIndex
