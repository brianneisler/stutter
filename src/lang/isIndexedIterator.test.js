import { SYMBOL_ITERATOR } from './constants'
import arrayLikeToIterator from './util/arrayLikeToIterator'
import isIndexedIterator from './isIndexedIterator'
import objectToIterator from './util/objectToIterator'

describe('isIndexedIterator', () => {
  test('returns true for arrayLikeToIterator', () => {
    expect(isIndexedIterator(arrayLikeToIterator([]))).toBe(true)
  })

  test('returns true for object with next and getIndex method', () => {
    expect(
      isIndexedIterator({
        next: () => ({
          done: true
        }),
        getIndex: () => {}
      })
    ).toBe(true)
  })

  test('returns false for native array iterator', () => {
    const array = []
    expect(isIndexedIterator(array[SYMBOL_ITERATOR]())).toBe(false)
  })

  test('returns false for native string iterator', () => {
    const string = 'abc'
    expect(isIndexedIterator(string[SYMBOL_ITERATOR]())).toBe(false)
  })

  test('returns false for generators', () => {
    expect(isIndexedIterator((function*() {})())).toBe(false)
  })

  test('returns false for native Set iterator', () => {
    const set = new Set()
    expect(isIndexedIterator(set[SYMBOL_ITERATOR]())).toBe(false)
  })

  test('returns true false for objectToIterator', () => {
    expect(isIndexedIterator(objectToIterator({}))).toBe(false)
  })

  test('returns false for all other values', () => {
    expect(isIndexedIterator(undefined)).toBe(false)
    expect(isIndexedIterator(null)).toBe(false)
    expect(isIndexedIterator(false)).toBe(false)
    expect(isIndexedIterator(true)).toBe(false)
    expect(isIndexedIterator(0)).toBe(false)
    expect(isIndexedIterator(-1)).toBe(false)
    expect(isIndexedIterator(1)).toBe(false)
    expect(isIndexedIterator(NaN)).toBe(false)
    expect(isIndexedIterator(Infinity)).toBe(false)
    expect(isIndexedIterator(-Infinity)).toBe(false)
    expect(isIndexedIterator(/abc/)).toBe(false)
    expect(isIndexedIterator(async () => {})).toBe(false)
    expect(isIndexedIterator(() => {})).toBe(false)
    expect(isIndexedIterator(function() {})).toBe(false)
    expect(isIndexedIterator(function*() {})).toBe(false)
    expect(isIndexedIterator(new ArrayBuffer(2))).toBe(false)
    expect(isIndexedIterator(new Boolean(false))).toBe(false)
    expect(isIndexedIterator(new Boolean(true))).toBe(false)
    expect(isIndexedIterator(new Date())).toBe(false)
    expect(isIndexedIterator(new Error())).toBe(false)
    expect(isIndexedIterator(new Number(-1.2))).toBe(false)
    expect(isIndexedIterator(new Number(1.2))).toBe(false)
    expect(isIndexedIterator(new Number(NaN))).toBe(false)
    expect(isIndexedIterator(new Number(Infinity))).toBe(false)
    expect(isIndexedIterator(new Number(-Infinity))).toBe(false)
    expect(isIndexedIterator(new Promise(() => {}))).toBe(false)
    expect(isIndexedIterator(new Proxy({}, {}))).toBe(false)
    expect(isIndexedIterator(Symbol('abc'))).toBe(false)
    expect(isIndexedIterator(new WeakMap())).toBe(false)
    expect(isIndexedIterator(new WeakSet())).toBe(false)
  })
})
