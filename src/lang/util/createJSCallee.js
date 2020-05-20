import { STACKTRACE_LINE } from '../constants/Regex'
import { TO_STRING_TAG } from '../constants/Symbol'
import buildCallstack from './buildCallstack'

const parseCallee = (callstack) => {
  // console.log('callstack:', callstack)
  const line = callstack[5]
  const match = line.match(STACKTRACE_LINE)
  const name = match[1]
  const file = match[2]
  const lineNumber = match[3]
  const columnNumber = match[4]
  return {
    [TO_STRING_TAG]: 'Function',
    columnNumber,
    file,
    lineNumber,
    name
  }
}

const createJSCallee = () => {
  const callstack = buildCallstack(5)
  return parseCallee(callstack)
}

export default createJSCallee
