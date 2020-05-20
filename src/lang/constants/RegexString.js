/**
 * This constant represents a regex fragment for finding the ascii character range `U+0000 - U+007F`
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants.RegexString
 */
export const ASCII_RANGE = '\\u0000-\\u007f'

/**
 * This constant represents a regex fragment for finding the utf-16 combo half marks range `U+FE20 - U+FE2F`
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants.RegexString
 */
export const COMBO_HALF_MARKS_RANGE = '\\ufe20-\\ufe2f'

/**
 * This constant represents a regex fragment for finding the utf-16 combo marks range `U+0300 - U+036F`
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants.RegexString
 */
export const COMBO_MARKS_RANGE = '\\u0300-\\u036f'

/**
 * This constant represents a regex fragment for finding the utf-16 surrogates range `U+D800 - U+DFFF`
 *
 * See [UTF-16 U+D800 - U+DFFF](https://en.wikipedia.org/wiki/UTF-16#U+D800_to_U+DFFF) for more information.
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants.RegexString
 */
export const SURROGATES_RANGE = '\\ud800-\\udfff'

/**
 * This constant represents a regex fragment for finding the utf-16 combo symbols range `U+20D0 - U+20FF`
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants.RegexString
 */
export const COMBO_SYMBOLS_RANGE = '\\u20d0-\\u20ff'

/**
 * This constant represents a regex fragment for finding the utf-16 combo ranges
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants.RegexString
 */
export const COMBO_RANGE =
  COMBO_MARKS_RANGE + COMBO_HALF_MARKS_RANGE + COMBO_SYMBOLS_RANGE

/**
 * This constant represents a regex fragment for identifying the utf-16 zero-width joiner.
 *
 * See [Zero width joiner](https://en.wikipedia.org/wiki/Zero-width_joiner) for more information.
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants
 */
export const UTF_ZERO_WIDTH_JOINER = '\\u200d'

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
export const VARIATION_SELECTORS_RANGE = '\\ufe00-\\ufe0f'
