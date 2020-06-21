import { ITERATOR, TO_STRING_TAG } from '../constants/Symbol'
import anyToImmutableList from '../util/anyToImmutableList'

/**
 * Note: This class is **immutable**
 *
 * This class represents a Path of one or more Propeties, Keys and Indexes
 */
class Path {
  /**
   * Create a `Path`
   * @param {Array} path An array of Path parts
   */
  constructor(path) {
    this.path = anyToImmutableList(path)
    this.size = this.path.size
  }

  [ITERATOR]() {
    return this.path.values()
  }

  get [TO_STRING_TAG]() {
    return 'Path'
  }

  first() {
    return this.get(0)
  }

  get(index) {
    return this.path.get(index)
  }

  rest() {
    return this.tail()
  }

  tail() {
    return new Path(this.path.rest())
  }

  /**
   * Convert this Path to a name representing it
   * @returns {string} The name of this `Path`
   */
  toName() {
    return this.path.join('.')
  }
}

export default Path
