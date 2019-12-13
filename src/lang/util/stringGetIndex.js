/**
 * Returns the Character from the String stored at the specified Index.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {String} string The String on which to get the Index.
 * @param {Index} index The Index to get.
 * @returns {Character} The value at the specified Index on the Array. Undefined if the Array does not have the Index.
 * @example
 * const string = 'foo'
 *
 * stringGetIndex(array, 0)
 * //=> 'f'
 *
 * stringGetIndex(array, 3)
 * //=> undefined
 */
const stringGetIndex = (string, index) => string[index]

export default stringGetIndex
