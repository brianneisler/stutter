import { MAX_SAFE_INTEGER } from '../constants'
import defn from '../common/defn'

/**
 * Generates a random integer between 0 and the maximum given value
 *
 * @function
 * @since v0.1.0
 * @category math
 * @param {*} max The maximum integer.
 * @returns {number} The randomly generated integer.
 * @example
 *
 * randomInt(1) // => number between 0 - 1
 */
const randomInt = defn('randomInt', (max = MAX_SAFE_INTEGER) =>
  Math.floor(Math.random() * Math.floor(max))
)

export default randomInt
