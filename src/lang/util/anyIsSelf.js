/**
 * Checks if `any` is classified as a `Self` when compared to the given `meta` object.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @param {Meta} meta The meta object to compare against
 * @returns {boolean} Returns `true` if `any` is a Self, else `false`.
 * @example
 *
 * anyIsSelf('foo', { self: String })
 * // => true
 *
 * anyIsSelf(1, { self: String })
 * // => false
 */
const anyIsSelf = (any, meta) => {
  if (!meta || !meta.self) {
    throw new TypeError(
      `anyIsSelf expects a 'meta' object with a 'self' property, instead received ${JSON.stringify(
        meta,
        null,
        2
      )}`
    )
  }
  return meta.self.is(any)
}

export default anyIsSelf
