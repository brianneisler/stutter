import { ITERATOR } from './constants/Symbol'
import isKeyedIterator from './isKeyedIterator'
import objectToIterator from './util/objectToIterator'

describe('isKeyedIterator', () => {
  test('returns true for objectToIterator', () => {
    expect(isKeyedIterator(objectToIterator({}))).toBe(true)
  })

  test('returns true for object with next and getKey method', () => {
    expect(
      isKeyedIterator({
        getKey: () => {},
        next: () => ({
          done: true
        })
      })
    ).toBe(true)
  })

  test('returns false for native array iterator', () => {
    const array = []
    expect(isKeyedIterator(array[ITERATOR]())).toBe(false)
  })

  test('returns false for native string iterator', () => {
    const string = 'abc'
    expect(isKeyedIterator(string[ITERATOR]())).toBe(false)
  })

  test('returns false for generators', () => {
    expect(isKeyedIterator((function* () {})())).toBe(false)
  })

  test('returns false for native Set iterator', () => {
    const set = new Set()
    expect(isKeyedIterator(set[ITERATOR]())).toBe(false)
  })

  test('returns false for all other values', () => {
    expect(isKeyedIterator(undefined)).toBe(false)
    expect(isKeyedIterator(null)).toBe(false)
    expect(isKeyedIterator(false)).toBe(false)
    expect(isKeyedIterator(true)).toBe(false)
    expect(isKeyedIterator(0)).toBe(false)
    expect(isKeyedIterator(-1)).toBe(false)
    expect(isKeyedIterator(1)).toBe(false)
    expect(isKeyedIterator(NaN)).toBe(false)
    expect(isKeyedIterator(Infinity)).toBe(false)
    expect(isKeyedIterator(-Infinity)).toBe(false)
    expect(isKeyedIterator(/abc/)).toBe(false)
    expect(isKeyedIterator(async () => {})).toBe(false)
    expect(isKeyedIterator(() => {})).toBe(false)
    expect(isKeyedIterator(function () {})).toBe(false)
    expect(isKeyedIterator(function* () {})).toBe(false)
    expect(isKeyedIterator(new ArrayBuffer(2))).toBe(false)
    expect(isKeyedIterator(new Boolean(false))).toBe(false)
    expect(isKeyedIterator(new Boolean(true))).toBe(false)
    expect(isKeyedIterator(new Date())).toBe(false)
    expect(isKeyedIterator(new Error())).toBe(false)
    expect(isKeyedIterator(new Number(-1.2))).toBe(false)
    expect(isKeyedIterator(new Number(1.2))).toBe(false)
    expect(isKeyedIterator(new Number(NaN))).toBe(false)
    expect(isKeyedIterator(new Number(Infinity))).toBe(false)
    expect(isKeyedIterator(new Number(-Infinity))).toBe(false)
    expect(isKeyedIterator(new Promise(() => {}))).toBe(false)
    expect(isKeyedIterator(new Proxy({}, {}))).toBe(false)
    expect(isKeyedIterator(Symbol('abc'))).toBe(false)
    expect(isKeyedIterator(new WeakMap())).toBe(false)
    expect(isKeyedIterator(new WeakSet())).toBe(false)
  })
})
