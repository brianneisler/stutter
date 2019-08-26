import curry from '../common/curry'
import defn from '../common/defn'
import isFunction from '../lang/isFunction'
import isNil from '../lang/isNil'
import isUndefined from '../lang/isUndefined'

const baseGetProp = (prop, value) => {
  if (isUndefined(prop)) {
    return value
  }
  if (isFunction(prop)) {
    return prop(value)
  }
  if (isNil(value)) {
    return undefined
  }
  if (isFunction(value.get)) {
    return value.get(prop)
  }
  return value[prop]
}

/**
 * Returns the indicated  property of the given object, if it exists.
 *
 * *Note* This method automatically upgrades to async. If either the `prop` or the `value` is a Promise, this method will await the promises before executing and itself will return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {string|number|Function} prop The property name or property selector
 * @param {Object} value The value to query
 * @returns {*} The value at the given property
 * @example
 *
 * getProp('x', {x: 100})
 * //=> 100
 *
 * getProp('x', {})
 * //=> undefined
 *
 * getProp(undefined, {})
 * //=> {}
 *
 * getProp(1, ['foo', 'bar'])
 * //=> 'bar'
 *
 * getProp((value) => value[0], ['foo', 'bar'])
 * //=> 'foo'
 *
 * getProp('foo', {
 *   foo: 'bar',
 *   get(prop) { return this[prop] }
 * })
 * //=> 'bar'
 */
const getProp = curry(defn('getProp', baseGetProp))

export default getProp

export { baseGetProp }
