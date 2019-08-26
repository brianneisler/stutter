import REGEX_STRING_COMBO_HALF_MARKS_RANGE from './REGEX_STRING_COMBO_HALF_MARKS_RANGE'
import REGEX_STRING_COMBO_MARKS_RANGE from './REGEX_STRING_COMBO_MARKS_RANGE'
import REGEX_STRING_COMBO_SYMBOLS_RANGE from './REGEX_STRING_COMBO_SYMBOLS_RANGE'

/**
 * This constant represents a regex fragment for finding the utf-16 combo ranges
 *
 * @private
 * @type {string}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_STRING_COMBO_RANGE =
  REGEX_STRING_COMBO_MARKS_RANGE +
  REGEX_STRING_COMBO_HALF_MARKS_RANGE +
  REGEX_STRING_COMBO_SYMBOLS_RANGE

export default REGEX_STRING_COMBO_RANGE
