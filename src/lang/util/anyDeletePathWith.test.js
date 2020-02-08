import Path from './js/Path'
import anyDeletePathWith from './anyDeletePathWith'
import anyIsPath from './anyIsPath'
import anySetPathWith from './anySetPathWith'
import objectDeleteProperty from './objectDeleteProperty'
import objectGetProperty from './objectGetProperty'
import objectHasProperty from './objectHasProperty'
import objectSetProperty from './objectSetProperty'

describe('anyDeletePathWith', () => {
  test('empty path returns undefined', () => {
    expect(
      anyDeletePathWith(
        undefined,
        new Path([]),
        () => {},
        () => {},
        () => {},
        () => {}
      )
    ).toBe(undefined)
    expect(
      anyDeletePathWith(
        null,
        new Path([]),
        () => {},
        () => {},
        () => {},
        () => {}
      )
    ).toBe(undefined)
    expect(
      anyDeletePathWith(
        'foo',
        new Path([]),
        () => {},
        () => {},
        () => {},
        () => {}
      )
    ).toBe(undefined)
    expect(
      anyDeletePathWith(
        1,
        new Path([]),
        () => {},
        () => {},
        () => {},
        () => {}
      )
    ).toBe(undefined)
  })

  test('correctly calls deleteFunc on all path parts', () => {
    const any = {
      a: { b: { c: 3 } }
    }
    const path = new Path(['a', 'b', 'c'])
    const getFunc = jest.fn((target, key) => objectGetProperty(target, key))
    const hasFunc = (target, key) => objectHasProperty(target, key)
    const setFunc = jest.fn((target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    })
    const deleteFunc = jest.fn((target, key) => {
      if (anyIsPath(key)) {
        return anyDeletePathWith(target, key, getFunc, hasFunc, setFunc, deleteFunc)
      }
      return objectDeleteProperty(target, key)
    })

    const result = anyDeletePathWith(any, path, getFunc, hasFunc, setFunc, deleteFunc)
    expect(getFunc).toHaveBeenNthCalledWith(1, any, 'a')
    expect(getFunc).toHaveBeenNthCalledWith(2, any.a, 'b')
    expect(getFunc).toHaveBeenCalledTimes(2)

    expect(setFunc).toHaveBeenNthCalledWith(1, any.a, 'b', {})
    expect(setFunc).toHaveBeenNthCalledWith(2, any, 'a', { b: {} })
    expect(setFunc).toHaveBeenCalledTimes(2)

    expect(deleteFunc).toHaveBeenNthCalledWith(1, any.a, new Path(['b', 'c']))
    expect(deleteFunc).toHaveBeenNthCalledWith(2, any.a.b, new Path(['c']))
    expect(deleteFunc).toHaveBeenNthCalledWith(3, any.a.b, 'c')
    expect(deleteFunc).toHaveBeenCalledTimes(3)

    expect(result).toEqual({
      a: { b: {} }
    })
  })

  test("when nil value is encountered on traversal and is not the last item in path, we escape and don't modify the value", () => {
    const path = new Path(['a', 'b'])
    const getFunc = (target, key) => objectGetProperty(target, key)
    const hasFunc = (target, key) => objectHasProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }
    const deleteFunc = (target, key) => {
      if (anyIsPath(key)) {
        return anyDeletePathWith(target, key, getFunc, hasFunc, setFunc, deleteFunc)
      }
      return objectDeleteProperty(target, key)
    }
    const objectA = { a: undefined }
    expect(anyDeletePathWith(objectA, path, getFunc, hasFunc, setFunc, deleteFunc)).toBe(objectA)
    const objectB = { b: null }
    expect(anyDeletePathWith(objectB, path, getFunc, hasFunc, setFunc, deleteFunc)).toBe(objectB)
  })

  test('upgrades to async when getFunc returns a promise', async () => {
    const path = new Path(['a', 'b', 'c'])
    const getFunc = async (target, key) => objectGetProperty(target, key)
    const hasFunc = (target, key) => objectHasProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }
    const deleteFunc = (target, key) => {
      if (anyIsPath(key)) {
        return anyDeletePathWith(target, key, getFunc, hasFunc, setFunc, deleteFunc)
      }
      return objectDeleteProperty(target, key)
    }

    const any = {
      a: { b: { c: 3 } }
    }
    const promise = anyDeletePathWith(any, path, getFunc, hasFunc, setFunc, deleteFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual({
      a: { b: {} }
    })
  })

  test('handles async nil values', async () => {
    const path = new Path(['a', 'b', 'c'])
    const getFunc = (target, key) => objectGetProperty(target, key)
    const hasFunc = (target, key) => objectHasProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }
    const deleteFunc = (target, key) => {
      if (anyIsPath(key)) {
        return anyDeletePathWith(target, key, getFunc, hasFunc, setFunc, deleteFunc)
      }
      return objectDeleteProperty(target, key)
    }

    const any = {
      a: Promise.resolve({ b: Promise.resolve(null) })
    }
    const promise = anyDeletePathWith(any, path, getFunc, hasFunc, setFunc, deleteFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual({
      a: { b: null }
    })
  })

  test('handles async Path values', async () => {
    const path = new Path([Promise.resolve('a'), Promise.resolve('b'), Promise.resolve('c')])
    const getFunc = (target, key) => objectGetProperty(target, key)
    const hasFunc = (target, key) => objectHasProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }
    const deleteFunc = (target, key) => {
      if (anyIsPath(key)) {
        return anyDeletePathWith(target, key, getFunc, hasFunc, setFunc, deleteFunc)
      }
      return objectDeleteProperty(target, key)
    }

    const any = {
      a: { b: { c: 3 } }
    }
    const promise = anyDeletePathWith(any, path, getFunc, hasFunc, setFunc, deleteFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual({
      a: { b: {} }
    })
  })
})
