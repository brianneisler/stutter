import { anyIsFunction, anyIsObject, objectAssign } from './util'
import Object from './types/Object'
import SYMBOL_PROTOCOLS from './constants/SYMBOL_PROTOCOLS'
import String from './types/String'
import Type from './types/Type'
import def from './def'
import fn from './fn'
import type from './type'

/**
 * Defines a new `Type` with the given `name`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 *
 * @signature deftype(
 *   name: String,
 *   description: String,
 *   defintion: {
 *     class: Class,
 *     is: ?Function,
 *     to: ?Function,
 *     protocols: Array<(Protocol | Object)>
 *   }
 * ) => Type
 * @param {String} name The name of the `Type`
 * @param {String} description Description of the `Type`
 * @param {{ class: Class, is: Function, to: Function, protocols: Array<(Protocol | Object)> }} definition The type definition. Can optionally inlcude `is` and
 * `to` methods.
 * @returns {Type} The new `Type`
 * @example
 *
 * const NumberType = deftype(
 *   'Number',
 *   'A numeric value',
 *   {
 *     class: Number,
 *     is: anyIsNumber,
 *     to: anyToNumber
 *   }
 * )
 *
 * @signature deftype(
 *   name: String,
 *   defintion: {
 *     class: Class,
 *     is: ?Function,
 *     to: ?Function,
 *     protocols: Array<(Protocol | Object)>
 *   }
 * ) => Type
 * @param {String} name The name of the type
 * @param {{ class: Class, is: Function, to: Function, protocols: Array<(Protocol | Object)> }} definition The type definition. Can optionally inlcude `is` and
 * `to` methods.
 * @returns {Type} The new `Type`
 * @example
 *
 * const NumberType = deftype(
 *   'Number',
 *   {
 *     class: Number,
 *     is: anyIsNumber,
 *     to: anyToNumber
 *   }
 * )
 *
 * @signature deftype(
 *   name: String,
 *   description: String
 * ) => Type
 * @param {String} name The name of the type
 * @param {String} description Description of the type
 * @returns {Type} The new `Type`
 * @example
 *
 * const NumberType = deftype(
 *   'Number',
 *   'A numeric value'
 * )
 *
 * @signature deftype(
 *   name: String
 * ) => Type
 * @param {String} name The name of the type
 * @returns {Type} The new `Type`
 * @example
 *
 * const NumberType = deftype(
 *   'Number'
 * )
 */
const deftype = fn(
  [String, String, Object, () => Type],
  (name, description, definition) => {
    const definedType = def(name, description, type(definition))
    if (anyIsFunction(definedType.class) && anyIsObject(definedType.protocols)) {
      let protocols = definedType.class.prototype[SYMBOL_PROTOCOLS]
      if (!protocols) {
        protocols = {}
      }
      // TODO BRN: Might be good to check for previous protocols with the same name?
      definedType.class.prototype[SYMBOL_PROTOCOLS] = objectAssign(protocols, definedType.protocols)
    }
    return definedType
  },

  [String, Object, () => Type],
  (name, definition) => deftype(name, '', definition),

  [String, String, () => Type],
  (name, description) => deftype(name, description, {}),

  [String, () => Type],
  (name) => deftype(name, '', {})
)

export default deftype
