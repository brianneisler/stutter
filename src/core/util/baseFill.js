export default function baseFill(array, value, start, end) {
  var length = array.length

  start = start == null ? 0 : (+start || 0)
  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = (typeof end == 'undefined' || end > length) ? length : (+end || 0)
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : end >>> 0
  start >>>= 0

  while (start < length) {
    array[start++] = value
  }
  return array
}
