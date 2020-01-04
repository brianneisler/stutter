import isFunction from './isFunction'

example('isFunction', () => {
  isFunction(function() {})
  // => true

  isFunction(/abc/)
  // => false
})
