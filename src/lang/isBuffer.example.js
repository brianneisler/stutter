import isBuffer from './isBuffer'

example('isBuffer', () => {
  isBuffer(new Buffer(2))
  // => true

  isBuffer(new Uint8Array(2))
  // => false
})
