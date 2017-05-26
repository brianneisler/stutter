export default function wrapDefaultValue(defaultValue) {
  return (fn) => (...args) => {
    if (args.length === 0) {
      return defaultValue
    }
    return fn(...args)
  }
}
