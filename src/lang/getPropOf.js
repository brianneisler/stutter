import { baseGetProp } from './getProp'
import curry from '../common/curry'
import defn from '../common/defn'

const baseGetPropOf = (value, prop) => baseGetProp(prop, value)

/**
 * Returns the indicated  property of the given object, if it exists. This method has reverse parameters compared to the [`getProp`](#getProp) method
 *
 * *Note* This method automatically upgrades to async. If either the `prop` or the `value` is a Promise, this method will await the promises before executing and itself will return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Object} value The value to query
 * @param {string|number|Function} prop The property name or property selector
 * @returns {*} The value at the given property
 * @example
 *
 * getPropOf({x: 100}, 'x') //=> 100
 * getPropOf({}, 'x')       //=> undefined
 * getPropOf({}, undefined)  //=> {}
 * getPropOf(['foo', 'bar'], 1)  //=> 'bar'
 * getPropOf(['foo', 'bar'], (value) => value[0])  //=> 'foo'
 * getProp({
 *   foo: 'bar',
 *   get(prop) { return this[prop] }
 * }, 'foo') //=> 'bar'
 */
const getPropOf = curry(defn('getPropOf', baseGetPropOf))

export default getPropOf

export { baseGetPropOf }
