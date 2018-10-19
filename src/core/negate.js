
export default function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(ERROR_TEXT_FUNC)
  }
  return function(...args) {
    return !predicate.apply(this, args)
  }
}
