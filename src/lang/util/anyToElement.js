import Element from '../classes/Element'
import anyIsElement from './anyIsElement'

/**
 * Converts `any` to an Element
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {Object} Returns the Element.
 * @example
 *
 * const value = 'foo'
 * const el = element(value)
 *
 * el.valueOf()
 * // => 'foo'
 */
const anyToElement = (any) => {
  if (anyIsElement(any)) {
    return any
  }
  return new Element(any)
}

export default anyToElement
