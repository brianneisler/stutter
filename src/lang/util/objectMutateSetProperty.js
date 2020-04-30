/**
 * Mutably sets a `Property` on an `Object`
 *
 * @private
 * @function
 * @mutable
 * @since v0.2.0
 * @category lang.util
 * @param {Object} object The Object on which to set the property.
 * @param {Property} property The name or Symbol of the property to update.
 * @param {Any} value The value to set the Property to
 * @returns {Object} The original Object with the property set to the given value
 *
 * const object = {
 *   foo: 1,
 *   bar: 2
 * }
 *
 * const result = objectSetProperty(object, 'foo', 3)
 *
 * result.foo
 * //=> 3
 *
 * object.foo
 * //=> 3
 */
const objectMutateSetProperty = (object, property, value) => {
  object[property] = value
  return object
}

export default objectMutateSetProperty
