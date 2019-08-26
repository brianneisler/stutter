import anyIsObject from './anyIsObject'
import anyIsTypedArray from './anyIsTypedArray'
import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is native JavaScript object instance.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a native JS object instance
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
const isNativeObject = (any) => {
  if (anyIsObject(any)) {
    const tag = anyToStringTag(any)
    switch (tag) {
      case 'Arguments':
      case 'Array':
      case 'ArrayBuffer':
      case 'AsyncFunction':
      case 'Boolean':
      case 'Buffer':
      case 'Date':
      case 'DOMException':
      case 'Error':
      case 'Function':
      case 'Generator':
      case 'GeneratorFunction':
      case 'Number':
      case 'Promise':
      case 'Proxy':
      case 'RegExp':
      case 'Set':
      case 'String':
      case 'Symbol':
      case 'WeakMap':
      case 'WeakSet':
        return true
    }
    if (anyIsTypedArray(any)) {
      return true
    }
  }
  return false
}

export default isNativeObject
