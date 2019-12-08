import Path from './js/Path'
import anyHasPathWith from './anyHasPathWith'

describe('anyHasPathWith', () => {
  test('empty path returns true', () => {
    expect(anyHasPathWith(undefined, new Path([]), () => {})).toBe(true)
    expect(anyHasPathWith(null, new Path([]), () => {})).toBe(true)
    expect(anyHasPathWith('foo', new Path([]), () => {})).toBe(true)
    expect(anyHasPathWith(1, new Path([]), () => {})).toBe(true)
  })

  test('correctly calls getFunc and hasFunc on all path parts', () => {
    const any = {
      a: { b: { c: 3 } }
    }
    const path = new Path(['a', 'b', 'c'])
    const getFunc = jest.fn((key, value) => value[key])
    const hasFunc = jest.fn(() => true)

    const result = anyHasPathWith(any, path, getFunc, hasFunc)
    expect(getFunc).toHaveBeenNthCalledWith(1, 'a', any)
    expect(getFunc).toHaveBeenNthCalledWith(2, 'b', any.a)
    expect(getFunc).toHaveBeenNthCalledWith(3, 'c', any.a.b)
    expect(getFunc).toHaveBeenCalledTimes(3)
    expect(hasFunc).toHaveBeenNthCalledWith(1, 'a', any)
    expect(hasFunc).toHaveBeenNthCalledWith(2, 'b', any.a)
    expect(hasFunc).toHaveBeenNthCalledWith(3, 'c', any.a.b)
    expect(hasFunc).toHaveBeenCalledTimes(3)
    expect(result).toBe(true)
  })

  test('returns false when has returns false', () => {
    const path = new Path(['a', 'b'])
    const getFunc = (key, value) => value[key]
    const hasFunc = () => false
    expect(anyHasPathWith({}, path, getFunc, hasFunc)).toBe(false)
    expect(anyHasPathWith({}, path, getFunc, hasFunc)).toBe(false)
  })
})
