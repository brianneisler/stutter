import isResolved from './isResolved'

example('isResolved', () => {
  isResolved({
    ['@@redux-saga/IO']: 'op'
  })
  // => false

  isResolved((function() {})())
  // => false

  isResolved(new Promise(() => {}))
  // => false

  isResolved({ resolve: () => 'foo' })
  // => false

  isResolved(null)
  // => true

  isResolved(undefined)
  // => true

  isResolved('abc')
  // => true
})
