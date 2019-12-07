import objectClone from './objectClone'

/**
 * Updates a `Property` on an `Object` and returns a copy of the `Object` with the
 * `Property` updated.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @since v0.1.0
 * @category lang.util
 * @param {Object} object The Object on which to update the property.
 * @param {String} property The name or Symbol of the property to update.
 * @param {Function} func The updater Function
 * @returns {Object} A copy of the Object with the Property updated with the
 * result of the updater function
 *
 * const object = {
 *   foo: 1,
 *   bar: 2
 * }
 *
 * const result = objectUpdateProperty(object, 'foo', (value) => value + 1)
 *
 * result.foo
 * //=> 2
 *
 * object.foo
 * //=> 1
 */
const objectUpdateProperty = (object, property, func) => {
  const clone = objectClone(object)
  clone[property] = func(object[property])
  return clone
}

export default objectUpdateProperty
