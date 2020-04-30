import objectMutateSetProperty from './objectMutateSetProperty'

/**
 * Updates a `Property` on an `Object`
 *
 * @private
 * @function
 * @mutable
 * @since v0.2.0
 * @category lang.util
 * @param {Object} object The Object on which to update the property.
 * @param {Property} property The name or Symbol of the property to update.
 * @param {Function} func The updater Function
 * @returns {Object} The original Object with the Property updated with the
 * result of the updater function
 *
 * const object = {
 *   foo: 1,
 *   bar: 2
 * }
 *
 * const result = objectMutateUpdateProperty(object, 'foo', (value) => value + 1)
 *
 * result.foo
 * //=> 2
 *
 * object.foo
 * //=> 2
 */
const objectMutateUpdateProperty = (object, property, func) => {
  const result = func(object[property])
  return objectMutateSetProperty(object, property, result)
}

export default objectMutateUpdateProperty
