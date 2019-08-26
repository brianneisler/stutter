/**
 * This constant represents a regex fragment for finding the utf-16 variation selectors range `U+FE00 - U+FE0F`
 *
 * See [Variation Selectors (Unicode block)](https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)) for more information.
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_STRING_VARIATION_SELECTORS_RANGE = '\\ufe00-\\ufe0f'

export default REGEX_STRING_VARIATION_SELECTORS_RANGE
