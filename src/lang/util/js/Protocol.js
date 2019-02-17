/**
 * Note: This class is **immutable**
 */
class Protocol {
  /**
   * @param {Object} definitions
   */
  constructor(definitions) {
    this.definitions = definitions
  }

  /**
   * @returns {Object}
   */
  getDefinitions() {
    return this.definitions
  }
}

export default Protocol
