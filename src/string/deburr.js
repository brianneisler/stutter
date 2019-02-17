import { DEBURRED_LETTERS, REGEX_COMBO_MARK, REGEX_LATIN } from '../constants'
import toString from '../lang/toString'

const baseDeburr = (string) => {
  string = toString(string)
  return string && string.replace(REGEX_LATIN, DEBURRED_LETTERS).replace(REGEX_COMBO_MARK, '')
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @function
 * @since 0.0.21
 * @category string
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * deburr('déjà vu')
 * // => 'deja vu'
 */
const deburr = curry(defn('deburr', baseDeburr))

export default deburr

export { baseDeburr }
