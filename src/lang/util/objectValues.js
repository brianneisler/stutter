import Object from './js/Object'

/**
 * Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
 *
 * Note: known bugs with the Object.values method or lack of support are addressed using the core-js polyfill provided by babel
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Object} obj The object whose enumerable own property values are to be returned.
 * @returns {Array} An array containing the given object's own enumerable property values.
 * @example
 *
 * objectValues({a: 1, b: 2, c: 3})
 * //=> [1, 2, 3]
 */
const objectValues = Object.values

export default objectValues
