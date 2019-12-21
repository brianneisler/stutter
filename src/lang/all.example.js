import all from './all'

example('all', async () => {
  const nums = [1, Promise.resolve(2), (async () => 3)()]
  await all(nums)
  // => [ 1, 2, 3 ]

  const keyed = {
    a: 1,
    b: Promise.resolve(2),
    c: (async () => 3)()
  }
  await all(keyed)
  // => { a: 1, b: 2, c: 3 }

  await all('abc')
  // => 'abc'

  await all(123)
  // => 123
})
