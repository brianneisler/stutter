import anyIsFunction from '../anyIsFunction'

/**
 * Note: This class is **immutable**
 */
class Type {
  /**
   * @param {{ class: Class, protocols: Map<Protocol>}} definition
   */
  constructor(definition) {
    this.class = definition.class
    this.protocols = definition.protocols

    if (anyIsFunction(definition.is)) {
      this.is = definition.is
    }

    if (anyIsFunction(definition.to)) {
      this.to = definition.to
    }
  }

  is() {
    throw new Error(`The 'is' method as not been implemented for the Type ${this.class}`)
  }

  to() {
    throw new Error(`The 'to' method as not been implemented for the Type ${this.class}`)
  }
}

export default Type
