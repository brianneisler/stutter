import isObject from './isObject'

example('isObject', () => {
  isObject({})
  // => true

  isObject([1, 2, 3])
  // => true

  isObject(Function)
  // => true

  isObject(null)
  // => false
})
