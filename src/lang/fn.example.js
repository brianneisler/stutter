import Any from './types/Any'
import String from './types/String'
import fn from './fn'

example('fn without type check', () => {
  const split = fn((string) => string.split('.'))

  split('foo.bar')
  // => ['foo', 'bar']

  split(123)
  // => throws TypeError '.split is not a function'
})

example('fn with type check', () => {
  const split = fn([String, () => Array], (string) => string.split('.'))

  split('foo.bar')
  // => ['foo', 'bar']

  split(123)
  // => throws Exception 'Function `split` expected Parameter `string` to be a `String`. Instead found a `Number`'
})

example('fn with Any handler', () => {
  const split = fn(
    [String],
    (string) => string.split('.'),

    [Any],
    (any) => toString(any).split('.')
  )

  split('foo.bar')
  // => ['foo', 'bar']

  split(123)
  // => ['123']
})
