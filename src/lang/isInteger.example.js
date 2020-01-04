import isInteger from './isInteger'

example('isInteger', () => {
  isInteger(3) // => true

  isInteger(new Number(3)) // => true

  isInteger(3.2) // => false

  isInteger(Number.MIN_VALUE) // => false

  isInteger(Infinity) // => false

  isInteger(NaN) // => false

  isInteger('3') // => false
})
