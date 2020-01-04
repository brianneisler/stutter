import isPromise from './isPromise'

example('isPromise', () => {
  isPromise(new Promise(() => {}))
  // => true

  isPromise({})
  // => false

  isPromise({ then: () => {} })
  // => true
})
