import Path from './js/Path'
import anyHasPathWith from './anyHasPathWith'
import objectGetProperty from './objectGetProperty'
import objectHasProperty from './objectHasProperty'

describe('anyHasPathWith', () => {
  test('empty path returns true', () => {
    expect(
      anyHasPathWith(
        undefined,
        new Path([]),
        () => {},
        () => {}
      )
    ).toBe(true)
    expect(
      anyHasPathWith(
        null,
        new Path([]),
        () => {},
        () => {}
      )
    ).toBe(true)
    expect(
      anyHasPathWith(
        'foo',
        new Path([]),
        () => {},
        () => {}
      )
    ).toBe(true)
    expect(
      anyHasPathWith(
        1,
        new Path([]),
        () => {},
        () => {}
      )
    ).toBe(true)
  })

  test('correctly calls getFunc and hasFunc on all path parts', () => {
    const any = {
      a: { b: { c: 3 } }
    }
    const path = new Path(['a', 'b', 'c'])
    const getFunc = jest.fn((value, key) => value[key])
    const hasFunc = jest.fn((value, key) => !!value[key])

    const result = anyHasPathWith(any, path, getFunc, hasFunc)
    expect(getFunc).toHaveBeenNthCalledWith(1, any, 'a')
    expect(getFunc).toHaveBeenNthCalledWith(2, any.a, 'b')
    expect(getFunc).toHaveBeenNthCalledWith(3, any.a.b, 'c')
    expect(getFunc).toHaveBeenCalledTimes(3)
    expect(hasFunc).toHaveBeenNthCalledWith(1, any, 'a')
    expect(hasFunc).toHaveBeenNthCalledWith(2, any.a, 'b')
    expect(hasFunc).toHaveBeenNthCalledWith(3, any.a.b, 'c')
    expect(hasFunc).toHaveBeenCalledTimes(3)
    expect(result).toBe(true)
  })

  test('returns false when has returns false', () => {
    const path = new Path(['a', 'b'])
    const getFunc = (value, key) => value[key]
    const hasFunc = (value, key) => !!value[key]
    expect(anyHasPathWith({}, path, getFunc, hasFunc)).toBe(false)
    expect(anyHasPathWith({}, path, getFunc, hasFunc)).toBe(false)
  })

  test('handles async value in object', () => {
    const path = new Path(['a', 'b'])
    const getFunc = objectGetProperty
    const hasFunc = objectHasProperty
    const result = anyHasPathWith(
      {
        a: Promise.resolve({
          b: Promise.resolve(2)
        })
      },
      path,
      getFunc,
      hasFunc
    )
    expect(result).toBeInstanceOf(Promise)
  })

  test('handles async Path values', async () => {
    const path = new Path([Promise.resolve('a'), Promise.resolve('b'), Promise.resolve('c')])
    const getFunc = objectGetProperty
    const hasFunc = objectHasProperty
    const any = {
      a: { b: { c: 3 } }
    }
    const promise = anyHasPathWith(any, path, getFunc, hasFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual(true)
  })
})
