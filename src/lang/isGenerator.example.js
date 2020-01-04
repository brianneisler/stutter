import isGenerator from './isGenerator'

example('isGenerator', () => {
  isGenerator((function() {})())
  // => true

  isGenerator((function() {})())
  // => false

  isGenerator({
    next: () => {},
    throw: () => {}
  })
  // => true
})
