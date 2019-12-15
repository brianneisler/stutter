import capitalize from './capitalize'
import defn from '../lang/defn'
import toLowerCase from './toLowerCase'
import words from './words'

/**
 * @function
 * @since v0.1.0
 * @category string
 * @param {String} string The string to convert.
 * @returns {String} Returns the camel cased string.
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
const camelCase = defn(
  'camelCase',
  'Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).',

  [String, () => String],
  (string) =>
    words(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
      word = toLowerCase(word)
      return result + (index ? capitalize(word) : word)
    }, '')
)

export default camelCase
