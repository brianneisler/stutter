import { definitionsToProtocol } from './util'
import Object from './types/Object'
import Protocol from './types/Protocol'
import defn from './defn'

/**
 * Returns a new anonymous `Protocol` with the given `definitions`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {Object} definitions The `Protocol` function definitions.
 * @returns {Protocol} The new `Protocol`
 * @example
 *
 * const Addable = protocol({
 *   add: [Self, Number, () => Self]
 * })
 */
const protocol = defn(
  'lang.protocol',
  'Returns a new anonymous `Protocol` with the given `definitions`.',

  [Object, () => Protocol],
  (definitions) => definitionsToProtocol(definitions)
)

export default protocol
