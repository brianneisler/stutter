import DEFAULT_NAMESPACE_NAME from '../constants/DEFAULT_NAMESPACE_NAME'
import stringSubstring from './stringSubstring'

const REGEX_NAME = /^((?:[a-zA-Z0-9_-]*\.)*)([a-zA-Z0-9_-]+)$/

/**
 * Defines a value to store in a namespace with the given name.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {String} string The string to parse
 * @returns {{ namespaceName: String, valueName: String }}
 * @throws {Exception} Throws an `Exception` with the code `Expected:Argument:toMatchRegex`
 * @example
 *
 */
const stringParseNames = (string) => {
  const matches = string.match(REGEX_NAME) || []
  let namespaceName = matches[1]
  const valueName = matches[2]
  if (!valueName) {
    throw new Error(`Could not parse name from string '${string}'`)
  }
  if (!namespaceName) {
    namespaceName = DEFAULT_NAMESPACE_NAME
  } else {
    namespaceName = stringSubstring(namespaceName, 0, namespaceName.length - 1)
  }
  return {
    namespaceName,
    valueName
  }
}

export default stringParseNames
