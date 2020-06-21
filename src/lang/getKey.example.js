import ImmutableMap from './classes/ImmutableMap'
import Map from './classes/Map'
import WeakMap from './classes/WeakMap'
import getKey from './getKey'

example('getKey', () => {
  getKey(
    'a',
    new Map([
      ['a', 1],
      ['b', 2]
    ])
  )
  // => 1

  getKey(
    'b',
    new ImmutableMap([
      ['a', 1],
      ['b', 2]
    ])
  )
  // => 2

  const key = {}
  getKey(key, new WeakMap([[key, 1]]))
  // => 1
})
