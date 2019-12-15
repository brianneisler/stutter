import Any from '../lang/types/Any'
import String from '../lang/types/String'
import defn from '../lang/defn'
import stringToLowerCase from '../lang/util/stringToLowerCase'
import toString from '../lang/toString'

/**
 * @since v0.1.0
 * @param {*} value
 * @returns {string} the given value converted to a string and lower cased
 * @example
 *
 * lowerCase('ABC') //=> 'abc'
 * lowerCase(true) //=> 'true'
 * lowerCase(123) //=> '123'
 * await lowerCase(Promise.resolve(123)) //=> '123'
 */
const lowerCase = defn(
  'string.lowerCase',
  'Converts the given value to a string and then converts it to lower case.',

  [String, () => String],
  (string) => stringToLowerCase(string),

  [Any, () => String],
  (any) => stringToLowerCase(toString(any))
)

export default lowerCase
