import values from './values'

example('values', async () => {
  values({ a: 1, b: 2, c: 3 })
  // => [1, 2, 3]

  values({})
  // => []

  values(['fi', 'fo', 'fum'])
  // => [ 'fi', 'fo', 'fum' ]

  values([])
  // => []

  values('abc')
  // => ['a', 'b', 'c']

  values('')
  // => []

  await values(Promise.resolve({ a: 1, b: 2 }))
  // => [1, 2]
})
