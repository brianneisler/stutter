import RegExp from '../util/js/RegExp'

/**
 * Used to detect unsigned integer values.
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_UINT = RegExp(`^(?:0|[1-9]\\d*)$`)

export default REGEX_UINT
