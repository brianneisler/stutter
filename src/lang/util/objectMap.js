import arrayReduce from './arrayReduce'
import objectKeys from './objectKeys'

/**
 * This method creates a new `Object` with the results of calling a provided function on every element in the calling Object.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Object} object The object to iterate over.
 * @param {Function} func The function to execute for each value and key in the object
 * @returns {Object} The new `Object`
 * @example
 *
 * const object = {
 *   a: 1,
 *   b: 4,
 *   c: 9,
 *   d: 16
 * }
 * objectMap(object, x => x * 2)
 * //=> {
 *   a: 2,
 *   b: 8,
 *   c: 18,
 *   d: 32
 * }
 */
const objectMap = (object, func) => {
  return arrayReduce(
    objectKeys(object),
    (acc, key) => {
      acc[key] = func(object[key], key, object)
      return acc
    },
    {}
  )
}

export default objectMap
