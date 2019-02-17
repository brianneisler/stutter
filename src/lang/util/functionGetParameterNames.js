const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm
const PARAMETER_NAMES = /([^\s,]+)/g

const functionGetParameterNames = (func) => {
  const fnStr = func.toString().replace(STRIP_COMMENTS, '')
  let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(PARAMETER_NAMES)
  if (result === null) {
    result = []
  }
  return result
}

export default functionGetParameterNames
