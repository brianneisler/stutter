import Protocol from './js/Protocol'

/**
 * Converts the given `definitions` to an anonymous `Protocol`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Object} definitions The `Protocol` function definitions.
 * @returns {Protocol} The new `Protocol`
 * @example
 *
 * const Keyed = definitionsToProtocol({
 *   get: [Self, Key, () => Any],
 *   set: [Self, Key, Any, () => Self],
 * })
 */
const definitionsToProtocol = (definitions) => new Protocol(definitions)

export default definitionsToProtocol
