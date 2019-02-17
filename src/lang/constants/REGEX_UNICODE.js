import REGEX_STRING_COMBO_RANGE from './REGEX_STRING_COMBO_RANGE'
import REGEX_STRING_SURROGATES_RANGE from './REGEX_STRING_SURROGATES_RANGE'
import REGEX_STRING_UTF_ZERO_WIDTH_JOINER from './REGEX_STRING_UTF_ZERO_WIDTH_JOINER'
import REGEX_STRING_VARIATION_SELECTORS_RANGE from './REGEX_STRING_VARIATION_SELECTORS_RANGE'
import RegExp from '../util/js/RegExp'

/** Used to compose unicode capture groups. */
const rsSurrogates = `[${REGEX_STRING_SURROGATES_RANGE}]`
const rsCombo = `[${REGEX_STRING_COMBO_RANGE}]`
const rsFitz = '\\ud83c[\\udffb-\\udfff]'
const rsModifier = `(?:${rsCombo}|${rsFitz})`
const rsNonSurrogates = `[^${REGEX_STRING_SURROGATES_RANGE}]`
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}'
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]'

/** Used to compose unicode regexes. */
const reOptMod = `${rsModifier}?`
const rsOptVar = `[${REGEX_STRING_VARIATION_SELECTORS_RANGE}]?`
const rsOptJoin = `(?:${REGEX_STRING_UTF_ZERO_WIDTH_JOINER}(?:${[
  rsNonSurrogates,
  rsRegional,
  rsSurrPair
].join('|')})${rsOptVar + reOptMod})*`
const rsSeq = rsOptVar + reOptMod + rsOptJoin
const rsNonSurrogatesCombo = `${rsNonSurrogates}${rsCombo}?`
const rsSymbol = `(?:${[rsNonSurrogatesCombo, rsCombo, rsRegional, rsSurrPair, rsSurrogates].join(
  '|'
)})`

/**
 * This constant represents a RegExp for finding [string symbols](https://mathiasbynens.be/notes/javascript-unicode).
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_UNICODE = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol + rsSeq}`, 'g')

export default REGEX_UNICODE
