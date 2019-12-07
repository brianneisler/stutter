import SYMBOL_ITERATOR from '../../constants/SYMBOL_ITERATOR'
import SYMBOL_TO_STRING_TAG from '../../constants/SYMBOL_TO_STRING_TAG'
import anyToImmutableList from '../anyToImmutableList'

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

  [SYMBOL_ITERATOR]() {
    return this.path.values()
  }

  get [SYMBOL_TO_STRING_TAG]() {
    return 'Path'
  }

  get(index) {
    return this.path.get(index)
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
