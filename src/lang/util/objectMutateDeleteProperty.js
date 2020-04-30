/**
 * Mutably removes a property from an Object.
 *
 * See [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) for more information
 *
 * @private
 * @function
 * @mutable
 * @since v0.2.0
 * @category lang.util
 * @param {Object} object The Object on which to remove the property.
 * @param {String} prop The name or Symbol of the property to be deleted.
 * @returns {Object} The original Object that was passed to the function.
 *
 * const object = {
 *   foo: 1,
 *   bar: 2
 * }
 *
 * const result = objectMutateDeleteProperty(object, 'foo')
 *
 * result.foo
 * //=> undefined
 * object.foo
 * //=> 1
 */
const objectMutateDeleteProperty = (object, property) => {
  delete object[property]
  return object
}

export default objectMutateDeleteProperty
