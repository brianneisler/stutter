import ImmutableMap from './js/ImmutableMap'
import SYMBOL_ITERATOR from '../constants/SYMBOL_ITERATOR'
import Type from './js/Type'
import anyIsObject from './anyIsObject'
import anyIsProtocol from './anyIsProtocol'

const validateProtocols = (protocols) => {
  // TODO BRN: validate that the protocols have been implemented correctly
  // for each protocol implementation
  //   - get the protocol
  //   - ensure all required methods have been implemented
  //   - ensure each method's types match the expected types
  return !!protocols
}

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
const definitionToType = (definition) => {
  const { protocols } = definition
  let protocolsMap = new ImmutableMap()

  if (protocols) {
    const iter = protocols[SYMBOL_ITERATOR]()

    let next = iter.next()
    let protocol
    let implementation
    while (!next.done) {
      protocol = null
      implementation = null
      if (anyIsProtocol(next.value)) {
        protocol = next.value
      } else {
        throw new Error(
          `definitionToType method expected a Protocol in the Array. Instead found ${next.value}`
        )
      }
      next = iter.next()
      if (anyIsObject(next.value)) {
        // TODO BRN: Map over the object. For each Fn value, replace "Self" in
        // the parameters of each Fn
        implementation = next.value
      } else {
        throw new Error(
          `definitionToType method expected a Function in the Array. Instead found ${next.value}`
        )
      }
      protocolsMap = protocolsMap.set(protocol, implementation)
      next = iter.next()
    }

    validateProtocols(protocolsMap)
  }
  return new Type({
    ...definition,
    protocols: protocolsMap
  })
}

export default definitionToType
