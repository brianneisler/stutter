import REGEX_STRING_COMBO_RANGE from './REGEX_STRING_COMBO_RANGE'
import RegExp from '../util/js/RegExp'

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_COMBO_MARK = RegExp(`[${REGEX_STRING_COMBO_RANGE}]`, 'g')

export default REGEX_COMBO_MARK
