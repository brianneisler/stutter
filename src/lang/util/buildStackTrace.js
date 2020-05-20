import sourceToString from './sourceToString'

const buildStackTrace = (callstack) =>
  callstack.map((source) => sourceToString(source)).join('\n')

export default buildStackTrace
