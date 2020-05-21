import { TO_STRING_TAG } from '../../constants/Symbol'

/**
 * Note: This class is **immutable**
 *
 * This class represents an Element which is an item contained within an Indexed
 * value
 */
class Element {
  /**
   * Create a `Element`
   * @param {Any} value
   */
  constructor(value) {
    this.value = value
  }

  get [TO_STRING_TAG]() {
    return 'Element'
  }

  valueOf() {
    return this.value
  }
}

export default Element
