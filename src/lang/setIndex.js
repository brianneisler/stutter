import allWith from '../common/allWith'
import always from './always'
import curry from '../common/curry'
import dispatchable from '../common/dispatchable'
import isFunction from '../lang/isFunction'
import isString from '../lang/isString'
import isUndefined from '../lang/isUndefined'
import over from './over'
import stringSubstring from '../lang/stringSubstring'
import toString from '../lang/toString'

const baseAssocIndex = (index, value, indexed) => {
  if (isUndefined(index)) {
    return value
  }
  if (isFunction(index)) {
    return over(index, always(value), indexed)
  }
  if (isString(indexed)) {
    const charValue = toString(value)
    if (!isChar(charValue)) {
      throw new TypeError(`Trying to assoc a non character to a string ${charValue}`)
    }
    return stringSubstring(indexed, 0, index) + charValue + stringSubstring(indexed, index + 1)
  }
  const result = [...indexed]
  result[index] = value
  return result
}

const dispatchableAssocIndex = dispatchable('assocIndex', baseAssocIndex)

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {number} index The index number to set
 * @param {*} value The new value
 * @param {Array} array The array to clone
 * @returns {Array} A new array equivalent to the original except for the changed index.
 * @example
 *
 * assocIndex(1, 'c', ['a', 'b']) //=> ['a', 'c']
 */
const assocIndex = curry((index, value, array) =>
  allWith(
    ([resolvedIndex, resolvedArray]) => dispatchableAssocIndex(resolvedIndex, value, resolvedArray),
    [index, array]
  )
)

export default assocIndex

export { baseAssocIndex, dispatchableAssocIndex }
