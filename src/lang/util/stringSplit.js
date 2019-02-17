import String from './js/String'

const { split } = String.prototype

/**
 * This method splits a `String` object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {string} string The string to split
 * @param {string | RegExp} separator Specifies the string which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression. If a plain-text separator contains more than one character, that entire string must be found to represent a split point. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.
 * @param {number} limit Integer specifying a limit on the number of splits to be found. When this parameter is provided, the split() method splits the string at each occurrence of the specified separator but stops when limit entries have been placed into the array. It may still contain fewer entries than limit if the end of the string is reached before the specified limit is reached. The left-over text is not returned in the new array.
 * @returns {string} An Array of strings split at each point where the separator occurs in the given string.
 * @example
 *
 * stringSplit('abc')
 * //=> ['abc']
 */
const stringSplit = (string, separator, limit) => split.call(string, separator, limit)

export default stringSplit
