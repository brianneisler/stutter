import isArray from './isArray'
import noop from './noop'

example('isArray', () => {
  isArray([1, 2, 3])
  // => true

  isArray(document.body.children)
  // => false

  isArray('abc')
  // => false

  isArray(noop)
  // => false
})
