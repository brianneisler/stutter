import { baseIsOp } from './isOp'
import curry from './curry'
import isFunction from './isFunction'
import isGenerator from './isGenerator'
import isObject from './isObject'
import isPromise from './isPromise'

const baseIsResolved = (value) =>
  !isObject(value) ||
  !(isPromise(value) || isFunction(value.resolve) || isGenerator(value) || baseIsOp(value))

/**
 * Determines if the value is a resolvable value.
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {*} value
 * @returns {boolean}
 * @example
 *
 * isResolved({
 *   ['@@redux-saga/IO']: 'op'
 * })
 * //=> false
 *
 * isResolved((function* () {})())
 * //=> false
 *
 * isResolved(new Promise(() => {})))
 * //=> false
 *
 * isResolved({ resolve: () => 'foo' })
 * //=> false
 *
 * isResolved(null)
 * //=> true
 *
 * isResolved(undefined)
 * //=> true
 *
 * isResolved('abc')
 * //=> true
 */
const isResolved = curry(baseIsResolved)

export default isResolved

export { baseIsResolved }
