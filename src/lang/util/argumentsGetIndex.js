/**
 * Returns a value from the Arguments stored at the specified Index.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Arguments} args The Arguments on which to get the Index.
 * @param {Index} index The Index to get.
 * @returns {Any} The value at the specified Index on the Arguments. Undefined if the Argyments does not have the Index.
 * @example
 * (function() {
 *   argumentsGetIndex(arguments, 0)
 *   //=> 'foo'
 *
 *   argumentsGetIndex(array, 1)
 *   //=> undefined
 * })('foo')
 */
const argumentsGetIndex = (array, index) => array[index]

export default argumentsGetIndex
