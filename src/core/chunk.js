import count from './count'
import hintConvert from './hintConvert'
import isIterateeCall from './isIterateeCall'
import push from './push'
import slice from './slice'
import toInteger from './toInteger'

/**
 * Creates an array or list of elements split into groups the length of `size`. If `data` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @static
 * @param {Indexed<T>} data
 * @param {number} size
 * @returns {Indexed<T>}
 */
export default function chunk(data, size) {
  size = Math.max(toInteger(size), 0)
  const length = data ? count(data) : 0
  if (!length || size < 1) {
    return hintConvert(data, [])
  }
  let index = 0
  let result = hintConvert(data, [])

  while (index < length) {
    result = push(result, slice(data, index, (index += size)))
  }
  return result
}
