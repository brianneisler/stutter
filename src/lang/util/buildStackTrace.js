import sourceToString from './sourceToString'

const buildStackTrace = (stack) => {
  if (stack) {
    return stack.map((source) => sourceToString(source)).join('\n')
  }
  let callstack = []

  // NOTE BRN: See more info about this line https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
  Error.stackTraceLimit = Infinity

  const error = new Error()
  callstack = error.stack.split('\n')

  // let count = shift
  // while (count >= 0) {
  //   count -= 1
  //   callstack.shift()
  // }
  return `${callstack.join('\n')}`
}

export default buildStackTrace
