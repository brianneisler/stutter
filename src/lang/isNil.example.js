import isNil from './isNil'

example('isNil', () => {
  isNil(null)
  // => true

  isNil(void 0)
  // => true

  isNil(NaN)
  // => false
})
