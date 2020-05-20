import { PARAMETERS } from '../constants/Regex'

// const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm
const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)/gm
const NAME = /^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?:,|$)/

// TODO BRN: We can improve the performance of this method by performing this
// step at babel transpile time instead of having to do it every time at runtime

const functionGetParameterNames = (func) => {
  const funcStringWithoutComments = func.toString().replace(STRIP_COMMENTS, '')
  const matches = funcStringWithoutComments.match(PARAMETERS)
  if (!matches) {
    throw new Error(`Could not parse parameter names from function ${func}`)
  }

  const results = []
  let parametersString = matches[1] || matches[2] || matches[3]
  if (parametersString) {
    let match
    while ((match = parametersString.match(NAME))) {
      parametersString = parametersString.substring(match[0].length).trim()
      results.push(match[1])
    }
  }

  return results
}

export default functionGetParameterNames
