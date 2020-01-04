import isArrayLike from './isArrayLike'

example('isArrayLike', () => {
  isArrayLike([1, 2, 3])
  // => true

  isArrayLike(document.body.children)
  // => true

  isArrayLike('abc')
  // => true

  isArrayLike(Function)
  // => false
})
