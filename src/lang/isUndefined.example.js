import isUndefined from './isUndefined'

example('isUndefined', () => {
  isUndefined(void 0)
  // => true

  isUndefined(null)
  // => false
})
