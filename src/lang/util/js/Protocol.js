import { TO_STRING_TAG } from '../../constants/Symbol'

/**
 * Note: This class is **immutable**
 */
class Protocol {
  /**
   * @param {ImmutableMap<String, ImmutableList<Type>>} definitions
   */
  constructor(definitions) {
    this.definitions = definitions
  }

  get [TO_STRING_TAG]() {
    return 'Protocol'
  }

  /**
   * @returns {ImmutableMap<String, ImmutableList<Type>>}
   */
  getDefinitions() {
    return this.definitions
  }
}

export default Protocol
