/**
 * Note: This class is **immutable**
 *
 * This class represents a Function Parameter
 */
class Parameter {
  /**
   * Create a `Parameter`
   * @param {string} name The name of this Parameter
   * @param {Type} type The type assigned to this Parameter
   */
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  /**
   * Convert this Parameter to a name representing it
   * @returns {string} The name of this `Parameter`
   */
  toName() {
    return this.name
  }
}

export default Parameter
