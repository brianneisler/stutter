import Path from '../classes/Path'
import anyGetPathWith from './anyGetPathWith'
import objectGetProperty from './objectGetProperty'

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
    const getFunc = jest.fn(objectGetProperty)

    const result = anyGetPathWith(any, path, getFunc)
    expect(getFunc).toHaveBeenNthCalledWith(1, any, 'a')
    expect(getFunc).toHaveBeenNthCalledWith(2, any.a, 'b')
    expect(getFunc).toHaveBeenNthCalledWith(3, any.a.b, 'c')
    expect(getFunc).toHaveBeenCalledTimes(3)
    expect(result).toBe(3)
  })

  test('returns nil value when nil value is encountered', () => {
    const path = new Path(['a'])
    const getFunc = objectGetProperty
    expect(anyGetPathWith({ a: undefined }, path, getFunc)).toBe(undefined)
    expect(anyGetPathWith({ a: null }, path, getFunc)).toBe(null)
  })

  test('returns undefined value when nil value is encountered and not at end of path', () => {
    const path = new Path(['a', 'b'])
    const getFunc = objectGetProperty
    expect(anyGetPathWith({ a: undefined }, path, getFunc)).toBe(undefined)
    expect(anyGetPathWith({ a: null }, path, getFunc)).toBe(undefined)
  })

  test('returns Promise value when last value is a Promise', () => {
    const path = new Path(['a'])
    const getFunc = objectGetProperty
    const result = anyGetPathWith({ a: Promise.resolve(1) }, path, getFunc)
    expect(result).toBeInstanceOf(Promise)
  })

  test('handles async Path values', async () => {
    const path = new Path([
      Promise.resolve('a'),
      Promise.resolve('b'),
      Promise.resolve('c')
    ])
    const getFunc = objectGetProperty
    const any = {
      a: { b: { c: 3 } }
    }
    const promise = anyGetPathWith(any, path, getFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual(3)
  })
})
