import and from './and'

example('and', async () => {
  and(true, true)
  // => true

  and(true, false)
  // => false

  and(false, true)
  // => false

  and(false, false)
  // => false

  and(null, false)
  // => null

  and([], {})
  // => {}

  await and(Promise.resolve(false), false)
  // => false
})
