import ImmutableList from './util/js/ImmutableList'
import deleteIndex from './deleteIndex'

example('delete Index from Array', () => {
  deleteIndex(0, [1, 2])
  // => [2]
})

example('delete Index from String', () => {
  deleteIndex(1, 'bar')
  // => 'br'
})

example('delete Index from ImmutableList', () => {
  deleteIndex(1, ImmutableList([1, 2]))
  // => ImmutableList([ 2 ])
})
