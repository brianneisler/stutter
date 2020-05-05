/* eslint-disable no-console */
import set from './set'

example('set', async () => {
  set('c', 3, { a: 1, b: 2 })
  // => {a: 1, b: 2, c: 3}

  set('c.d', 3, { a: 1, b: 2 })
  // => {a: 1, b: 2, c: { d: 3 }}

  set(['c', 'd'], 3, { a: 1, b: 2 })
  // => {a: 1, b: 2, c: { d: 3 }}
})
