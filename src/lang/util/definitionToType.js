import Type from './js/Type'

/**
 * Converts the given `definition` to an anonymous `Type`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @template T
 * @param {{ class: ?Class<T>, is: ?(value: *) => Boolean, to: ?(value: *) => T, protocols: Map<Protocol, Object<String, Function>}} definition The `Type` definition.
 * @returns {Type} The new `Type`
 * @example
 *
 * const Number = definitionToType({
 *   class: Number,
 *   is: anyIsNumber,
 *   to: anyToNumber,
 *   protocols: new ImmutableMap([
 *     [Incramentable, { inc: (num) => num + 1 }]
 *   ])
 * })
 */
const definitionToType = (definition) => new Type(definition)

export default definitionToType
