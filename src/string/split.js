import Array from '../lang/types/Array'
import Separator from '../lang/types/Separator'
import String from '../lang/types/String'
import defn from '../lang/defn'
import stringSplit from '../lang/util/stringSplit'

/**
 * @since v0.1.0
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
const split = defn(
  'string.split',
  'Splits a String into an Array of Strings based on the given Separator.',

  [Separator, String, () => Array],
  (separator, string) => stringSplit(string, separator)
)

export default split
