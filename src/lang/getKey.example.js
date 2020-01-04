import ImmutableMap from './util/js/ImmutableMap'
import Map from './util/js/Map'
import WeakMap from './util/js/WeakMap'
import getKey from './getKey'

example('getKey', () => {
  getKey('a', new Map([['a', 1], ['b', 2]]))
  // => 1

  getKey('b', new ImmutableMap([['a', 1], ['b', 2]]))
  // => 2

  const key = {}
  getKey(key, new WeakMap([[key, 1]]))
  // => 1
})
