import {
  ASCII_RANGE,
  COMBO_RANGE,
  SURROGATES_RANGE,
  UTF_ZERO_WIDTH_JOINER,
  VARIATION_SELECTORS_RANGE
} from './RegexString'
import RegExp from '../classes/RegExp'

/**
 * This constant is used for identifying deep paths in strings
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants.Regex
 */
export const DEEP_PATH = RegExp(
  `\\.|\\[(?:[^[\\]]*|(["'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]`
)

/**
 * This constant represents a regex for finding Latin Unicode letters (excluding mathematical operators)
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants.Regex
 */
export const LATIN = RegExp(
  '[\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\xff\\u0100-\\u017f]',
  'g'
)

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants.Regex
 */
export const COMBO_MARK = RegExp(`[${COMBO_RANGE}]`, 'g')

/**
 * This constant represents a regex fragment for finding the utf-16 combo symbols range `U+20D0 - U+20FF`
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants.Regex
 */
export const COMBO_SYMBOLS_RANGE = '\\u20d0-\\u20ff'

// TODO BRN: For some reason this regex causes the program to go into a never
// ending match.
export const PARAMETERS = /^(?:(?:async\s*)?function\s*\*?\s*[a-zA-Z0-9_$]*\s*\(([\D\d]*?)\)\s*\{[\D\d]*\}\s*)|(?:(?:async\s*)?(?:(?:\(([\D\d]*?)\))|(?:([a-zA-Z$_][a-zA-Z0-9$_]*)))\s*=>[\D\d]*)$/

/**
 * Used to match property names within property paths.
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants.Regex
 */
export const PLAIN_PROP = RegExp('^\\w*$')

export const STACKTRACE_LINE = /^\s*at\s([a-zA-Z0-9\._$\-:<>]*)\s*\(?([a-zA-Z0-9\/\._\-$]*):([0-9]*):([0-9]*)\)?$/

export const ASCII_ONLY = RegExp(`^[${ASCII_RANGE}]*$`)

/** Used to compose unicode capture groups. */
const rsSurrogates = `[${SURROGATES_RANGE}]`
const rsCombo = `[${COMBO_RANGE}]`
const rsFitz = '\\ud83c[\\udffb-\\udfff]'
const rsModifier = `(?:${rsCombo}|${rsFitz})`
const rsNonSurrogates = `[^${SURROGATES_RANGE}]`
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}'
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]'

/** Used to compose unicode regexes. */
const reOptMod = `${rsModifier}?`
const rsOptVar = `[${VARIATION_SELECTORS_RANGE}]?`
const rsOptJoin = `(?:${UTF_ZERO_WIDTH_JOINER}(?:${[
  rsNonSurrogates,
  rsRegional,
  rsSurrPair
].join('|')})${rsOptVar + reOptMod})*`
const rsSeq = rsOptVar + reOptMod + rsOptJoin
const rsNonSurrogatesCombo = `${rsNonSurrogates}${rsCombo}?`
const rsSymbol = `(?:${[
  rsNonSurrogatesCombo,
  rsCombo,
  rsRegional,
  rsSurrPair,
  rsSurrogates
].join('|')})`

/**
 * This constant represents a RegExp for finding [string symbols](https://mathiasbynens.be/notes/javascript-unicode).
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants.Regex
 */
export const UNICODE = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol + rsSeq}`, 'g')

/**
 * Used to detect unsigned integer values.
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants.Regex
 */
export const UINT = RegExp(`^(?:0|[1-9]\\d*)$`)
