import objectClone from './objectClone'
import objectHasOwnProperty from './objectHasOwnProperty'

/**
 * Removes a property from an Object. Returns a copy of the object with the
 * Property removed.
 *
 * See [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) for more information
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @since v0.1.0
 * @category lang.util
 * @param {Object} object The Object on which to remove the property.
 * @param {String} prop The name or Symbol of the property to be deleted.
 * @returns {Object} A copy of the Object that was passed to the function.
 *
 * const object = {
 *   foo: 1,
 *   bar: 2
 * }
 *
 * const result = objectDeleteProperty(object, 'foo')
 *
 * result.foo
 * //=> undefined
 * object.foo
 * //=> 1
 */
const objectDeleteProperty = (object, property) => {
  if (!objectHasOwnProperty(object, property)) {
    return object
  }
  const clone = objectClone(object)
  delete clone[property]
  return clone
}

export default objectDeleteProperty
