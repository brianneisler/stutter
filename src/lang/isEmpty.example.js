import isEmpty from './isEmpty'

example('isEmpty', () => {
  isEmpty(null)
  // => true

  isEmpty(true)
  // => true

  isEmpty(1)
  // => true

  isEmpty([1, 2, 3])
  // => false

  isEmpty('abc')
  // => false

  isEmpty({ a: 1 })
  // => false
})
