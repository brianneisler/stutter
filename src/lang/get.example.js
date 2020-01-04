import get from './get'
import path from './path'

example('get', () => {
  get(path(['a', 'b']), { a: { b: 2 } })
  // => 2

  get(path(['a', 'b']), { c: { b: 2 } })
  // => undefined

  get('a', { a: { b: 2 } })
  // => { b: 2 }

  get(path('a.b'), { a: { b: 2 } })
  // => 2

  get(path('a[0]'), { a: [1, 2] })
  // => 1

  get(path('[0]'), [1, 2])
  // => 1
})
