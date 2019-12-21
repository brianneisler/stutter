/* eslint-disable no-console */
import allWith from './allWith'

example('allWith', async () => {
  const nums = [1, Promise.resolve(2), (async () => 3)()]
  await allWith((resolvedNums) => {
    console.log(resolvedNums)
    // => [ 1, 2, 3 ]
    return 'foo'
  }, nums)
  // => 'foo'

  const keyed = {
    a: 1,
    b: Promise.resolve(2),
    c: (async () => 3)()
  }

  await allWith((resolvedNums) => {
    console.log(resolvedNums)
    // => { a: 1, b: 2, c: 3 }
    return 'foo'
  }, keyed)
  // => 'foo'

  allWith(
    (resolvedNums) => {
      console.log(resolvedNums)
      // => [ 1, 2, 3 ]
      return 'foo'
    },
    [1, 2, 3]
  )
  // => 'foo'
})
