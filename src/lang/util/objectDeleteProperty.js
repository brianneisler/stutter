/**
 * Removes a property from an object and returns the object.
 *
 * See [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {object} object The object on which to remove the property.
 * @param {string} prop The name or Symbol of the property to be deleted.
 * @param {object} descriptor The descriptor for the property being defined.
 * @returns {object} The object that was passed to the function.
 *
 * const object = {
 *   foo: 1,
 *   bar: 2
 * }
 *
 * objectDeleteProperty(object, 'foo')
 *
 * object.foo
 * //=> undefined
 */
const objectDefineProperty = (object, property) => {
  delete object[property]
  return object
}

export default objectDefineProperty
