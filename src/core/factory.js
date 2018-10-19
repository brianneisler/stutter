const factory = func =>
  //TODO BRN: Can this be memoized?
  (...args) => func(...args)

export default factory
