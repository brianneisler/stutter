import ImmutableMap from './js/ImmutableMap'
import Map from './js/Map'
import anyHasKey from './anyHasKey'

describe('anyHasKey', () => {
  test('returns true for a Map that has the key', () => {
    const key = {}
    const map = new Map([[key, 'foo']])
    expect(anyHasKey(map, key)).toBe(true)
  })

  test('returns true for a ImmutableMap that has the key', () => {
    const key = {}
    const map = new ImmutableMap([[key, 'foo']])
    expect(anyHasKey(map, key)).toBe(true)
  })
})
