import anyToStringTag from './util/anyToStringTag'

/**
 * Returns a string valued property that is used in the creation of the default string description of an object.
 *
 * See [toStringTag Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) for more information
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to get the tag for
 * @returns {string} The string tag of the value
 * @example
 *
 * toStringTag(undefined)
 * // => 'Undefined'
 *
 * toStringTag({})
 * // => 'Object'
 */
const toStringTag = anyToStringTag

export default toStringTag
