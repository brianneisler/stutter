import ImmutableList from './classes/ImmutableList'
import getIndex from './getIndex'

example('getIndex', () => {
  getIndex(0, [1, 2])
  // => 1

  getIndex(1, 'bar')
  // => 'a'

  getIndex(1, ImmutableList([1, 2]))
  // => 2
})
