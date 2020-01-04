import isArrayBuffer from './isArrayBuffer'

example('isArrayBuffer', () => {
  isArrayBuffer(new ArrayBuffer(2))
  // => true

  isArrayBuffer(new Array(2))
  // => false
})
