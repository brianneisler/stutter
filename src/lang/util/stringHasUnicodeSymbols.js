import {
  REGEX_STRING_COMBO_RANGE,
  REGEX_STRING_SURROGATES_RANGE,
  REGEX_STRING_UTF_ZERO_WIDTH_JOINER,
  REGEX_STRING_VARIATION_SELECTORS_RANGE
} from '../constants'

const regexHasUnicode = RegExp(
  `[${REGEX_STRING_UTF_ZERO_WIDTH_JOINER +
    REGEX_STRING_SURROGATES_RANGE +
    REGEX_STRING_COMBO_RANGE +
    REGEX_STRING_VARIATION_SELECTORS_RANGE}]`
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
