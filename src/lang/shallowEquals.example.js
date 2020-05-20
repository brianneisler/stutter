/* eslint-disable no-console */
import shallowEquals from './shallowEquals'

example('set', async () => {
  shallowEquals({ a: 1, b: 2, c: undefined }, { a: 1, b: 2, c: undefined })
  // => true

  shallowEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })
  // => false
})
