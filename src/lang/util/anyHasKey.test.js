import ImmutableMap from '../classes/ImmutableMap'
import Map from '../classes/Map'
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

  test('returns false for property', () => {
    const map = new Map()
    map.foo = 'bar'
    expect(anyHasKey(map, 'bar')).toBe(false)
  })
})
