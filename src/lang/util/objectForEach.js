import arrayForEach from './arrayForEach'
import objectKeys from './objectKeys'

/**
 * This method executes a provided function once for each property and value
 * pair on the Object.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Object} object The object to iterate over.
 * @param {Function} func The function to execute for each value and key in the object
 * @returns {Object} The original `Object`
 * @example
 *
 * const object = {
 *   a: 1,
 *   b: 4,
 *   c: 9,
 *   d: 16
 * }
 * objectForEach(object, (value, key) => console.log(`${key}:${value}`))
 * // => a: 1
 * // => b: 4
 * // => c: 9
 * // => d: 16
 */
const objectForEach = (object, func) => {
  arrayForEach(objectKeys(object), (key) => {
    func(object[key], key, object)
  })
  return object
}

export default objectForEach
