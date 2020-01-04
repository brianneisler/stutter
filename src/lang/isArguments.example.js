import isArguments from './isArguments'

example('isArguments', () => {
  isArguments(
    (function() {
      return arguments
    })()
  )
  // => true

  isArguments([1, 2, 3])
  // => false
})
