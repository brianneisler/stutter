import always from './always'

// TODO BRN: Add proper support for aliases
// * should support a the aliased functions protocols
// * should allow for the name to be used in place of the underlying functions

/**
 * Alias of [`always`](#always)
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {*} value The value to wrap in a function
 * @returns {Function} A function that always returns the given value
 */
const constantly = always

export default constantly
