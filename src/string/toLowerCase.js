import curry from '../common/curry'
import defn from '../common/defn'
import stringToLowerCase from '../lang/stringToLowerCase'

/**
 * Returns the given string value converted to lower case (the value will be converted to a string if it isn't one).
 *
 * Note: this methis automatically upgrades to async. If any of the parameters are a Promise, this method will await the promise before executing and iteself return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category string
 * @param {string} string The string to convert to lower case.
 * @return {string} A new string representing the given string converted to lower case.
 * @example
 *
 * toLowerCase('FOO')
 * //=> 'foo'
 *
 * await toLowerCase(Promise.resolve('FOO'))
 * //=> 'foo'
 */
const toLowerCase = curry(defn('toLowerCase', stringToLowerCase))

export default toLowerCase
