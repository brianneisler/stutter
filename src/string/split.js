import curry from '../common/curry'
import defn from '../common/defn'
import isRegExp from '../lang/isRegExp'
import isString from '../lang/isString'
import stringSplit from '../lang/stringSplit'

const baseSplit = (separator, string) => stringSplit(string, separator)

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * Note: this methis automatically upgrades to async. If any of the parameters are a Promise, this method will resolve the promise before executing.
 *
 * @function
 * @since v0.1.0
 * @category string
 * @param {string|RegExp} separator The pattern to split on.
 * @param {String} string The string to separate into an array.
 * @return {Array} The array of strings from `string` separated by `separator`.
 * @example
 *
 * split('.', 'a.b.c.xyz.d') //=> ['a', 'b', 'c', 'xyz', 'd']
 *
 * const pathComponents = split('/')
 * pathComponents('/usr/local/bin/node') //=> ['', 'usr', 'local', 'bin', 'node']
 */
const split = curry(
  defn('split', (separator, string) => {
    // TODO BRN: Find a better approach to type checking than what is done here.
    if (!isString(separator) && !isRegExp(separator)) {
      throw new TypeError(
        `split method expected 'separator' parameter to be either a string or a RegExp. Instead was given ${separator}`
      )
    }
    if (!isString(string)) {
      throw new TypeError(
        `split method expected 'string' parameter to be either a string or a RegExp. Instead was given ${separator}`
      )
    }
    return baseSplit(separator, string)
  })
)

export default split

export { baseSplit }
