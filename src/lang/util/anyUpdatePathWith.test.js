import Path from './js/Path'
import anyIsPath from './anyIsPath'
import anySetPathWith from './anySetPathWith'
import anyUpdatePathWith from './anyUpdatePathWith'
import objectGetProperty from './objectGetProperty'
import objectSetProperty from './objectSetProperty'

describe('anyUpdatePathWith', () => {
  test('empty path returns returned value', () => {
    expect(
      anyUpdatePathWith(
        {},
        new Path([]),
        () => undefined,
        () => {},
        () => {},
        () => {}
      )
    ).toBe(undefined)
    expect(
      anyUpdatePathWith(
        {},
        new Path([]),
        () => null,
        () => {},
        () => {},
        () => {}
      )
    ).toBe(null)
    expect(
      anyUpdatePathWith(
        {},
        new Path([]),
        () => 'foo',
        () => {},
        () => {},
        () => {}
      )
    ).toBe('foo')
    expect(
      anyUpdatePathWith(
        {},
        new Path([]),
        () => 1,
        () => {},
        () => {},
        () => {}
      )
    ).toBe(1)
  })

  test('correctly calls setFunc on all path parts', () => {
    const any = {
      a: { b: { c: 0 } }
    }
    const path = new Path(['a', 'b', 'c'])
    const contagionFunc = jest.fn(() => ({}))
    const getFunc = jest.fn((target, key) => objectGetProperty(target, key))
    const setFunc = jest.fn((target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, contagionFunc, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    })
    const updater = jest.fn(() => 3)
    const result = anyUpdatePathWith(any, path, updater, contagionFunc, getFunc, setFunc)
    expect(updater).toHaveBeenCalledTimes(1)
    expect(updater).toHaveBeenCalledWith(0)
    expect(result).toEqual({
      a: { b: { c: 3 } }
    })
  })

  test('when nil value is encountered on traversal and is not the last item in path, we generate a new value based on contagion function', () => {
    const path = new Path(['a', 'b'])
    const contagionFunc = jest.fn(() => ({}))
    const getFunc = (target, key) => objectGetProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, contagionFunc, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }

    const objectA = { a: undefined }
    expect(anyUpdatePathWith(objectA, path, () => 'foo', contagionFunc, getFunc, setFunc)).toEqual({
      a: {
        b: 'foo'
      }
    })
    const objectB = { a: null }
    expect(anyUpdatePathWith(objectB, path, () => 'foo', contagionFunc, getFunc, setFunc)).toEqual({
      a: {
        b: 'foo'
      }
    })
  })

  test('upgrades to async when getFunc returns a promise', async () => {
    const path = new Path(['a', 'b', 'c'])
    const contagionFunc = () => ({})
    const getFunc = async (target, key) => objectGetProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }

    const any = {
      a: { b: null }
    }
    const promise = anyUpdatePathWith(any, path, () => 3, contagionFunc, getFunc, setFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual({
      a: { b: { c: 3 } }
    })
  })

  test('upgrades to async when updater returns a promise', async () => {
    const path = new Path(['a', 'b', 'c'])
    const contagionFunc = () => ({})
    const getFunc = (target, key) => objectGetProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }

    const any = {
      a: { b: null }
    }
    const promise = anyUpdatePathWith(any, path, async () => 3, contagionFunc, getFunc, setFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual({
      a: { b: { c: 3 } }
    })
  })

  test('handles async nil values', async () => {
    const path = new Path(['a', 'b', 'c'])
    const contagionFunc = () => ({})
    const getFunc = (target, key) => objectGetProperty(target, key)
    const setFunc = (target, key, value) => {
      if (anyIsPath(key)) {
        return anySetPathWith(target, key, value, contagionFunc, getFunc, setFunc)
      }
      return objectSetProperty(target, key, value)
    }

    const any = {
      a: Promise.resolve({ b: Promise.resolve(null) })
    }
    const promise = anyUpdatePathWith(any, path, () => 3, contagionFunc, getFunc, setFunc)
    expect(promise).toBeInstanceOf(Promise)
    const result = await promise
    expect(result).toEqual({
      a: { b: { c: 3 } }
    })
  })
})
