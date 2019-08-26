import Object from './js/Object'

/** Used for built-in method references. */
const objectProto = Object.prototype

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
const anyIsPrototype = (any) => {
  const Ctor = any && any.constructor
  const proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto

  return any === proto
}

export default anyIsPrototype
