/**
 * This constant represents a regex fragment for finding the utf-16 surrogates range `U+D800 - U+DFFF`
 *
 * See [UTF-16 U+D800 - U+DFFF](https://en.wikipedia.org/wiki/UTF-16#U+D800_to_U+DFFF) for more information.
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_STRING_SURROGATES_RANGE = '\\ud800-\\udfff'

export default REGEX_STRING_SURROGATES_RANGE
