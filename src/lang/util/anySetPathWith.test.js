import Path from './js/Path'
import anyIsPath from './anyIsPath'
import anySetPathWith from './anySetPathWith'
import objectGetProperty from './objectGetProperty'
import objectHasProperty from './objectHasProperty'
import objectSetProperty from './objectSetProperty'

describe('anySetPathWith', () => {
  test('empty path returns given value', () => {
    expect(anySetPathWith({}, new Path([]), undefined, () => {}, () => {}, () => {})).toBe(
      undefined
    )
    expect(anySetPathWith({}, new Path([]), null, () => {}, () => {}, () => {})).toBe(null)
    expect(anySetPathWith({}, new Path([]), 'foo', () => {}, () => {}, () => {})).toBe('foo')
    expect(anySetPathWith({}, new Path([]), 1, () => {}, () => {}, () => {})).toBe(1)
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

    const result = anySetPathWith(any, path, 3, contagionFunc, getFunc, setFunc)
    expect(getFunc).toHaveBeenNthCalledWith(1, any, 'a')
    expect(getFunc).toHaveBeenNthCalledWith(2, any.a, 'b')
    expect(getFunc).toHaveBeenCalledTimes(2)

    expect(setFunc).toHaveBeenNthCalledWith(1, any.a.b, 'c', 3)
    expect(setFunc).toHaveBeenNthCalledWith(2, any.a, 'b', { c: 3 })
    expect(setFunc).toHaveBeenNthCalledWith(3, any, 'a', { b: { c: 3 } })
    expect(setFunc).toHaveBeenCalledTimes(3)

    expect(result).toEqual({
      a: { b: { c: 3 } }
    })
  })

  // test("when nil value is encountered on traversal and is not the last item in path, we escape and don't modify the value", () => {
  //   const path = new Path(['a', 'b'])
  //   const getFunc = (target, key) => objectGetProperty(target, key)
  //   const hasFunc = (target, key) => objectHasProperty(target, key)
  //   const setFunc = (target, key, value) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, value, getFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key, value)
  //   }
  //   const setFunc = (target, key) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, getFunc, hasFunc, setFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key)
  //   }
  //   const objectA = { a: undefined }
  //   expect(anySetPathWith(objectA, path, getFunc, hasFunc, setFunc, setFunc)).toBe(objectA)
  //   const objectB = { b: null }
  //   expect(anySetPathWith(objectB, path, getFunc, hasFunc, setFunc, setFunc)).toBe(objectB)
  // })

  // test('upgrades to async when getFunc returns a promise', async () => {
  //   const path = new Path(['a', 'b', 'c'])
  //   const getFunc = async (target, key) => objectGetProperty(target, key)
  //   const hasFunc = (target, key) => objectHasProperty(target, key)
  //   const setFunc = (target, key, value) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, value, getFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key, value)
  //   }
  //   const setFunc = (target, key) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, getFunc, hasFunc, setFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key)
  //   }

  //   const any = {
  //     a: { b: { c: 3 } }
  //   }
  //   const promise = anySetPathWith(any, path, getFunc, hasFunc, setFunc, setFunc)
  //   expect(promise).toBeInstanceOf(Promise)
  //   const result = await promise
  //   expect(result).toEqual({
  //     a: { b: {} }
  //   })
  // })

  // test('handles async nil values', async () => {
  //   const path = new Path(['a', 'b', 'c'])
  //   const getFunc = (target, key) => objectGetProperty(target, key)
  //   const hasFunc = (target, key) => objectHasProperty(target, key)
  //   const setFunc = (target, key, value) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, value, getFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key, value)
  //   }
  //   const setFunc = (target, key) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, getFunc, hasFunc, setFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key)
  //   }

  //   const any = {
  //     a: Promise.resolve({ b: Promise.resolve(null) })
  //   }
  //   const promise = anySetPathWith(any, path, getFunc, hasFunc, setFunc, setFunc)
  //   expect(promise).toBeInstanceOf(Promise)
  //   const result = await promise
  //   expect(result).toEqual({
  //     a: { b: null }
  //   })
  // })

  // test('handles async Path values', async () => {
  //   const path = new Path([Promise.resolve('a'), Promise.resolve('b'), Promise.resolve('c')])
  //   const getFunc = (target, key) => objectGetProperty(target, key)
  //   const hasFunc = (target, key) => objectHasProperty(target, key)
  //   const setFunc = (target, key, value) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, value, getFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key, value)
  //   }
  //   const setFunc = (target, key) => {
  //     if (anyIsPath(key)) {
  //       return anySetPathWith(target, key, getFunc, hasFunc, setFunc, setFunc)
  //     }
  //     return objectSetProperty(target, key)
  //   }

  //   const any = {
  //     a: { b: { c: 3 } }
  //   }
  //   const promise = anySetPathWith(any, path, getFunc, hasFunc, setFunc, setFunc)
  //   expect(promise).toBeInstanceOf(Promise)
  //   const result = await promise
  //   expect(result).toEqual({
  //     a: { b: {} }
  //   })
  // })
})
