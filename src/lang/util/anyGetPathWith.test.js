import Path from './js/Path'
import anyGetPathWith from './anyGetPathWith'

describe('anyGetPathWith', () => {
  test('empty path returns given value', () => {
    expect(anyGetPathWith(undefined, new Path([]), () => {})).toBe(undefined)
    expect(anyGetPathWith(null, new Path([]), () => {})).toBe(null)
    expect(anyGetPathWith('foo', new Path([]), () => {})).toBe('foo')
    expect(anyGetPathWith(1, new Path([]), () => {})).toBe(1)
  })

  test('correctly calls get method on all path parts', () => {
    const any = {
      a: { b: { c: 3 } }
    }
    const path = new Path(['a', 'b', 'c'])
    const getFunc = jest.fn((key, value) => value[key])

    const result = anyGetPathWith(any, path, getFunc)
    expect(getFunc).toHaveBeenNthCalledWith(1, 'a', any)
    expect(getFunc).toHaveBeenNthCalledWith(2, 'b', any.a)
    expect(getFunc).toHaveBeenNthCalledWith(3, 'c', any.a.b)
    expect(getFunc).toHaveBeenCalledTimes(3)
    expect(result).toBe(3)
  })

  test('returns nil value when nil value is encountered', () => {
    const path = new Path(['a', 'b'])
    const getFunc = (key, value) => value[key]
    expect(anyGetPathWith({ a: undefined }, path, getFunc)).toBe(undefined)
    expect(anyGetPathWith({ a: null }, path, getFunc)).toBe(null)
  })
})
