import Immutable from 'immutable'

/**
 * @param {*} value
 * @returns {number}
 */
export default function hashCode(value) {
  return Immutable.hash(value)
}
