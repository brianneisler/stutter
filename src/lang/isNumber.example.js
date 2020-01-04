import isNumber from './isNumber'

example('isNumber', () => {
  isNumber(3)
  // => true

  isNumber(Number.MIN_VALUE)
  // => true

  isNumber(Infinity)
  // => true

  isNumber('3')
  // => false
})
