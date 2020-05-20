import {
  COMBO_RANGE,
  SURROGATES_RANGE,
  UTF_ZERO_WIDTH_JOINER,
  VARIATION_SELECTORS_RANGE
} from '../constants/RegexString'

const regexHasUnicode = RegExp(
  `[${
    UTF_ZERO_WIDTH_JOINER +
    SURROGATES_RANGE +
    COMBO_RANGE +
    VARIATION_SELECTORS_RANGE
  }]`
)

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @function
 * @since v0.1.0
 * @category string
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 * @example
 *
 * stringHasUnicodeSymbols('foo') //=> false
 * stringHasUnicodeSymbols('\\ufe00') //=> true
 */
const stringHasUnicodeSymbols = (string) => regexHasUnicode.test(string)

export default stringHasUnicodeSymbols
