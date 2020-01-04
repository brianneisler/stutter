import is from './is'

example('is', () => {
  is(Object, {})
  // => true

  is(Number, 1)
  // => true

  is(Object, 1)
  // => false

  is(String, 's')
  // => true

  is(String, new String(''))
  // => true

  is(Object, new String(''))
  // => true

  is(Object, 's')
  // => false

  is(Number, {})
  // => false
})
