import buildCallstack from './buildCallstack'
import sourceToString from './sourceToString'

const buildStackTrace = (stack, limit = Infinity) => {
  if (stack) {
    return stack.map((source) => sourceToString(source)).join('\n')
  }
  const callstack = buildCallstack(limit)
  return `${callstack.join('\n')}`
}

export default buildStackTrace
