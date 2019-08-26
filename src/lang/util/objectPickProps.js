/**
 * Returns a partial copy of an object picking the props specified.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Object} object The object to copy from
 * @param {Array<Prop>} props An array of `String` property names to pick for the new object
 * @returns {Object} A new object with properties from `props` on it.
 * @example
 *
 * objectPickProps({a: 1, b: 2, c: 3, d: 4}, ['a', 'd'])
 * //=> {a: 1, d: 4}
 */
const objectPickProps = (object, props) => {
  const result = {}
  let idx = 0
  while (idx < props.length) {
    const prop = props[idx]
    if (prop in object) {
      result[prop] = object[prop]
    }
    idx += 1
  }
  return result
}

export default objectPickProps
