import Map from './js/Map'
import anyHasProp from './anyHasProp'

describe('anyHasProp', () => {
  test('returns false for a Map that has the key', () => {
    const map = new Map([['foo', 'bar']])
    expect(anyHasProp(map, 'foo')).toBe(false)
  })

  test('returns true for an object that has a prop', () => {
    const obj = { foo: 'bar' }
    expect(anyHasProp(obj, 'foo')).toBe(true)
  })
})
