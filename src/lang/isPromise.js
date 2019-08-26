import anyIsPromise from './util/anyIsPromise'

/**
 * Checks whether the given value is a Promise.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a Promise, else `false`.
 * @example
 *
 * isPromise(new Promise(() => {})) //=> true
 *
 * isPromise({}) //=> false
 *
 * isPromise({ then: () => {} }) //=> true
 */
const isPromise = anyIsPromise

export default isPromise
