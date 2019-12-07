import Object from './types/Object'
import Type from './types/Type'
import def from './def'
import definitionToType from './util/definitionToType'
import fn from './fn'

/**
 * Returns a new anonymous `Type` with the given `definition`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {Object} definition The `Type` definition. Can optionally inlcude `is` and
 * `to` methods.
 * @returns {Type} The new `Type`
 * @example
 *
 * const Number = type({
 *   class: Number,
 *   is: anyIsNumber,
 *   to: anyToNumber
 * })
 */
const type = def(
  'lang.type',
  'Returns a new anonymous `Type` with the given `definition`.',

  fn([Object, () => Type], (definition) => definitionToType(definition))
)

export default type
