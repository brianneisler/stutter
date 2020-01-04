import has from './has'
import path from './path'

example('has', () => {
  has(path(['a', 'b']), { a: { b: 2 } })
  // => true

  has(path(['a', 'b']), { a: { b: undefined } })
  // => true

  has(path(['a', 'b']), { a: { c: 2 } })
  // => false

  has(path([]), {})
  // => true
})
