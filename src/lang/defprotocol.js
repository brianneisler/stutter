import { Object, Protocol, String } from './util/js'
import def from './def'
import fn from './fn'
import protocol from './protocol'

/**
 * Defines a new `Protocol` with the given `name` and function type `definitions`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 *
 * @signature defprotocol(
 *   name: String,
 *   description: String,
 *   defintions: {
 *     [funcName]: [...Type, () => Type]
 *   }
 * ) => Type
 * @param {String} name The name of the `Protocol`
 * @param {String} description Description of the `Protocol`
 * @param {{ [funcName]: [...Type, () => Type] }} definitions The `Protocol` function definitions.
 * @returns {Protocol} The new `Protocol`
 * @example
 *
 * const Keyed = defprotocol(
 *   'Keyed',
 *   'A Protocol for a storing values by key',
 *   {
 *     get: [Self, Key, () => Any],
 *     set: [Self, Key, Any, () => Self]
 *   }
 * )
 *
 *
 * @signature defprotocol(
 *   name: String,
 *   defintions: {
 *     [funcName]: [...Type, () => Type]
 *   }
 * ) => Type
 * @param {String} name The name of the `Protocol`
 * @param {{ [funcName]: [...Type, () => Type] }} definitions The `Protocol` function definitions.
 * @returns {Protocol} The new `Protocol`
 * @example
 *
 * const Keyed = defprotocol(
 *   'Keyed',
 *   {
 *     get: [Self, Key, () => Any],
 *     set: [Self, Key, Any, () => Self]
 *   }
 * )
 */
const defprotocol = fn(
  [String, String, Object, () => Protocol],
  (name, description, definitions) => {
    const definedProtocol = def(name, description, protocol(definitions))
    return definedProtocol
  },

  [String, Object, () => Protocol],
  (name, definitions) => defprotocol(name, '', definitions)
)

export default defprotocol
