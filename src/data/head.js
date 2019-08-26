import curry from '../common/curry'
import defn from '../common/defn'
import nth from '../common/nth'

/**
 * Returns the first element of the given list or string.
 *
 * *Aliases:*  [`first`](#first)
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Array|string} list The list to get the first element from
 * @returns {*} The first element in the given list
 * @example
 *
 * head(['fi', 'fo', 'fum']) //=> 'fi'
 * head([]) //=> undefined
 *
 * head('abc') //=> 'a'
 * head('') //=> ''
 */
const head = curry(defn('head', nth(0)))

export default head
