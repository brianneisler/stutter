import { Array, Object, objectOmitProps } from './util'
import defn from './defn'

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @returns {Object} A new object with properties from `names` not on it.
 * @example
 *
 * omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}) //=> {b: 2, c: 3}
 */
const omit = defn('omit',
  [Array, Object], (props, object) => objectOmitProps(object, props))
)

export default omit
