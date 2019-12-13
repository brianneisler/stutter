/**
 * Returns a value from the Object stored at the specified Property.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Object} object The object on which to get the property.
 * @param {Property} property The Property to get.
 * @returns {Any} The value at the specified property. Undefined if the Object does not have the property.
 *
 * const object = { foo: 42 }
 *
 * objectGetProperty(object, 'foo')
 * //=> 42
 *
 * objectGetProperty(object, 'bar')
 * //=> undefined
 */
const objectGetProperty = (object, property) => object[property]

export default objectGetProperty
