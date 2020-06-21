import Array from '../classes/Array'
import anyIsArguments from './anyIsArguments'
import anyIsArray from './anyIsArray'
import anyIsBuffer from './anyIsBuffer'
import anyIsIndex from './anyIsIndex'
import anyIsTypedArray from './anyIsTypedArray'
import objectHasOwnProperty from './objectHasOwnProperty'

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
const arrayLikeKeys = (value, inherited) => {
  const isArr = anyIsArray(value)
  const isArg = !isArr && anyIsArguments(value)
  const isBuff = !isArr && !isArg && anyIsBuffer(value)
  const isType = !isArr && !isArg && !isBuff && anyIsTypedArray(value)
  const skipIndexes = isArr || isArg || isBuff || isType
  const { length } = value
  const result = Array(skipIndexes ? length : 0)
  let index = skipIndexes ? -1 : length
  while (++index < length) {
    result[index] = `${index}`
  }
  for (const key in value) {
    if (
      (inherited || objectHasOwnProperty(value, key)) &&
      !(
        skipIndexes &&
        // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == 'length' ||
        // Node.js 0.10 has enumerable non-index properties on buffers.
        (isBuff && (key == 'offset' || key == 'parent')) ||
        // PhantomJS 2 has enumerable non-index properties on typed arrays.
        (isType &&
          (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) || // Skip index properties.
          anyIsIndex(key, length))
      )
    ) {
      result.push(key)
    }
  }
  return result
}

export default arrayLikeKeys
