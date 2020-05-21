import { ITERATOR, TO_STRING_TAG } from '../../constants/Symbol'
import ImmutableMap from './ImmutableMap'
import anyIsFunction from '../anyIsFunction'
import anyIsObject from '../anyIsObject'
import anyIsProtocol from '../anyIsProtocol'
import objectMap from '../objectMap'

const validateProtocols = (protocols) => {
  // TODO BRN: validate that the protocols have been implemented correctly
  // for each protocol implementation
  //   - get the protocol
  //   - ensure all required methods have been implemented
  //   - ensure each method's types match the expected types
  return !!protocols
}

const buildProtocols = (type, definitions) => {
  let protocolsMap = new ImmutableMap()

  if (definitions) {
    const iter = definitions[ITERATOR]()

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
          `buildProtocols method expected a Protocol in the Array. Instead found ${next.value}`
        )
      }
      next = iter.next()
      if (anyIsObject(next.value)) {
        // Map over the object. For each Fn value, set the "self" meta value
        implementation = objectMap(next.value, (fn) =>
          fn.update({ self: type }, { dispatch: true })
        )
      } else {
        throw new Error(
          `buildProtocols method expected an Object in the Array. Instead found ${next.value}`
        )
      }
      protocolsMap = protocolsMap.set(protocol, implementation)
      next = iter.next()
    }

    validateProtocols(protocolsMap)
  }

  return protocolsMap
}

/**
 * Note: This class is **immutable**
 */
class Type {
  /**
   * @param {{ class: Class, protocols: ImmutableMap<Protocol, Object>}} definition
   */
  constructor(definition) {
    this.class = definition.class
    this.protocols = buildProtocols(this, definition.protocols)

    if (anyIsFunction(definition.is)) {
      this.is = definition.is
    }

    if (anyIsFunction(definition.to)) {
      this.to = definition.to
    }
  }

  get [TO_STRING_TAG]() {
    return 'Type'
  }

  /**
   * @returns {ImmutableMap<Protocol, Object>}
   */
  getProtocols() {
    return this.protocols
  }

  is() {
    throw new Error(
      `The 'is' method as not been implemented for the Type ${this.class}`
    )
  }

  to() {
    throw new Error(
      `The 'to' method as not been implemented for the Type ${this.class}`
    )
  }
}

export default Type
