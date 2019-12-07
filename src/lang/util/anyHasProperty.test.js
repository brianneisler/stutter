import Map from './js/Map'
import anyHasProperty from './anyHasProperty'

describe('anyHasProperty', () => {
  test('returns false for a Map that has the key', () => {
    const map = new Map([['foo', 'bar']])
    expect(anyHasProperty(map, 'foo')).toBe(false)
  })

  test('returns true for an object that has a prop', () => {
    const obj = { foo: 'bar' }
    expect(anyHasProperty(obj, 'foo')).toBe(true)
  })
})
