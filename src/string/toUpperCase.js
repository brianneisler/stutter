import curry from '../common/curry'
import defn from '../common/defn'
import stringToUpperCase from '../lang/stringToUpperCase'

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
const toUpperCase = curry(defn('toUpperCase', stringToUpperCase))

export default toUpperCase
