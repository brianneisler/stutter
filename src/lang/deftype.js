import PlainObject from './types/PlainObject'
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
const deftype = def(
  'lang.deftype',
  'Defines a new `Type` with the given `name`.',

  fn(
    [String, PlainObject, PlainObject, () => Type],
    (name, meta, definition) => def(name, meta, type(definition)),

    [String, String, PlainObject, () => Type],
    (name, description, definition) => def(name, description, type(definition)),

    [String, PlainObject, () => Type],
    (name, definition) => def(name, '', type(definition)),

    [String, String, () => Type],
    (name, description) => def(name, description, type({})),

    [String, () => Type],
    (name) => def(name, '', type({}))
  )
)

export default deftype
