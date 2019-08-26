import { baseCapitalize } from './capitalize'
import { baseToLowerCase } from './toLowerCase'
import { baseWords } from './words'
import curry from '../common/curry'
import defn from '../common/defn'

const baseCamelCase = (string) =>
  words(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = baseToLowerCase(word)
    return result + (index ? baseCapitalize(word) : word)
  }, '')

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @function
 * @since v0.1.0
 * @category string
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = curry(defn('camelCase', baseCamelCase))

export default camelCase

export { baseCamelCase }
