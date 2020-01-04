import isBoolean from './isBoolean'

example('isBoolean', () => {
  isBoolean(false)
  // => true

  isBoolean(null)
  // => false
})
