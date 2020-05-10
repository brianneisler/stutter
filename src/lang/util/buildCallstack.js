const buildCallstack = (limit = Infinity) => {
  const previousLimit = Error.stackTraceLimit
  // NOTE BRN: See more info about this line https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
  Error.stackTraceLimit = limit
  const error = new Error()
  const callstack = error.stack.split('\n')
  Error.stackTraceLimit = previousLimit
  return callstack
}

export default buildCallstack
