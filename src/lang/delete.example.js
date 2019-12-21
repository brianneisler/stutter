import _delete from './delete'

example('delete Property from Object', () => {
  _delete('b', { a: 1, b: 2, c: 3 })
  // => {a: 1, c: 3}
})

example('delete Index from Array', () => {
  _delete(1, ['a', 'b', 'c'])
  // => ['a', 'c']
})
