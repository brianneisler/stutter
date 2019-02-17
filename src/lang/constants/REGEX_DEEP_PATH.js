import RegExp from '../util/js/RegExp'

/**
 * This constant is used for identifying deep paths in strings
 *
 * @private
 * @type {RegExp}
 * @since v0.1.0
 * @category constants
 */
const REGEX_DEEP_PATH = RegExp(`\\.|\\[(?:[^[\\]]*|(["'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]`)

export default REGEX_DEEP_PATH
