import String from '../classes/String'

const { match } = String.prototype

/**
 * This method retrieves the matches when matching a string against a regular expression.
 *
 * See [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} string The string to check for matches
 * @param {RegExp} regexp A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj). If you don't give any parameter and use the match() method directly, you will get an Array with an empty string:[""].
 * @returns {Array} If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.
 * @example
 *
 * stringMatch('abc', /a/)
 * //=> ['a']
 */
const stringMatch = (string, regexp) => match.call(string, regexp)

export default stringMatch
