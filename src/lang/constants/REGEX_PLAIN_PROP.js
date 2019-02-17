import RegExp from '../util/js/RegExp'

/**
 * Used to match property names within property paths.
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category lang.constants
 */
const REGEX_PLAIN_PROP = RegExp('^\\w*$')

export default REGEX_PLAIN_PROP
