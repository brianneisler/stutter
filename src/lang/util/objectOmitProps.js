import objectHasOwnProperty from './objectHasOwnProperty'

/**
 * Returns a partial copy of an object omitting the props specified.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Object} object The object to copy from
 * @param {Array<Prop>} props An array of String properties to omit from the new object
 * @returns {Object} A new object with properties from `props` not on it.
 * @example
 *
 * objectOmitProps({a: 1, b: 2, c: 3, d: 4}, ['a', 'd'])
 * //=> { b: 2, c: 3 }
 */
const objectOmitProps = (object, props) => {
  const result = {}
  const index = {}
  const { length } = props
  let idx = 0

  while (idx < length) {
    index[props[idx]] = 1
    idx += 1
  }

  for (const prop in object) {
    if (!objectHasOwnProperty(index, prop)) {
      result[prop] = object[prop]
    }
  }
  return result
}

export default objectOmitProps
