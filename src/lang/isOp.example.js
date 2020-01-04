import isOp from './isOp'

example('isOp', () => {
  isOp({
    ['@@redux-saga/IO']: 'op'
  })
  // => true
})
