import defn from '../lang/defn'
import toLowerCase from './toLowerCase'
import upperFirst from './upperFirst'

/**
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
const capitalize = defn(
  'capitalize',
  'Converts the first character of `string` to upper case and the remaining to lower case.',

  [String, () => String],
  (string) => upperFirst(toLowerCase(string))
)

export default capitalize
