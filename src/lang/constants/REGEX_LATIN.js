import RegExp from '../util/js/RegExp'

/**
 * This constant represents a regex for finding Latin Unicode letters (excluding mathematical operators)
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_LATIN = RegExp('[\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\xff\\u0100-\\u017f]', 'g')

export default REGEX_LATIN
