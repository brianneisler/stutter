import { anyIsNativeObject } from './util'
import defn from './defn'

/**
 * Checks if `any` is native JavaScript object instance.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a native JS object instance
 * @example
 *
 * isNativeObject(new WeakSet())
 * // => true
 *
 * isNativeObject({})
 * // => false
 *
 * class MyObject {}
 * isNativeObject(new MyObject())
 * // => false
 */
const isNativeObject = defn('isNativeObject', anyIsNativeObject)

export default isNativeObject
