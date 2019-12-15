import Any from '../lang/types/Any'
import String from '../lang/types/String'
import defn from '../lang/defn'
import stringToUpperCase from '../lang/util/stringToUpperCase'
import toString from '../lang/toString'

/**
 * Returns the given string value converted to upper case (the value will be converted to a string if it isn't one).
 *
 * Note: this methis automatically upgrades to async. If any of the parameters are a Promise, this method will await the promise before executing and iteself return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category string
 * @param {string} string The string to convert to upper case.
 * @return {string} A new string representing the given string converted to upper case.
 * @example
 *
 * toUpperCase('foo')
 * //=> 'FOO'
 *
 * await toUpperCase(Promise.resolve('foo'))
 * //=> 'FOO'
 */
const toUpperCase = defn(
  'toUpperCase',
  "Returns the given string value converted to upper case (the value will be converted to a string if it isn't one)",

  [String, () => String],
  stringToUpperCase,

  [Any, () => String],
  (any) => stringToUpperCase(toString(any))
)

export default toUpperCase
