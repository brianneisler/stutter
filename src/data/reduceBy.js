import reduce from './reduce'

/**
 * Groups the value of the `Iterable` according to the result of calling
 * the String-returning function `keyFunc` on each value and reduces the elements
 * of each group to a single value via the reducer function `valueFunc`.
 *
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @example
 */
const reduceBy = (iterable, valueAccum, valueFunc, keyFunc) =>
  reduce(
    (accum, value) => {
      const key = keyFunc(value)
      accum[key] = valueFunc(has(key, acc) ? acc[key] : valueAcc, elt)
      return accum
    },
    {},
    iterable
  )

export default reduceBy
