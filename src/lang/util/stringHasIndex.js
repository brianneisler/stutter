/**
 * Returns a boolean indicating whether the String has the specified Index.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {String} string The String on which to check for the Index.
 * @param {Index} index The Index to test.
 * @returns {Character} A Boolean indicating whether or not the String has the specified Index.
 * @example
 * const string = 'foo'
 *
 * stringHsIndex(array, 0)
 * //=> true
 *
 * stringHasIndex(array, 3)
 * //=> false
 */
const stringHasIndex = (string, index) => index < string.length

export default stringHasIndex
