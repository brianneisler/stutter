import Immutable from 'immutable'
import isIndexed from './isIndexed'

describe('isIndexed', () => {
  test('returns true for Arrays', () => {
    expect(isIndexed([])).toBe(true)
    expect(isIndexed(new Array())).toBe(true)
  })

  test('returns true for Strings', () => {
    expect(isIndexed('')).toBe(true)
    expect(isIndexed('abc')).toBe(true)
    expect(isIndexed(new String('abc'))).toBe(true)
  })

  test('returns true for Immutable List', () => {
    expect(isIndexed(new Immutable.List())).toBe(true)
  })

  test('returns true for Immutable Stack', () => {
    expect(isIndexed(new Immutable.Stack())).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isIndexed(undefined)).toBe(false)
    expect(isIndexed(null)).toBe(false)
    expect(isIndexed(false)).toBe(false)
    expect(isIndexed(true)).toBe(false)
    expect(isIndexed(0)).toBe(false)
    expect(isIndexed(-1)).toBe(false)
    expect(isIndexed(1)).toBe(false)
    expect(isIndexed(NaN)).toBe(false)
    expect(isIndexed(Infinity)).toBe(false)
    expect(isIndexed(-Infinity)).toBe(false)
    expect(isIndexed({})).toBe(false)
    expect(isIndexed(/abc/)).toBe(false)
    expect(isIndexed(async () => {})).toBe(false)
    expect(isIndexed(() => {})).toBe(false)
    expect(isIndexed(function() {})).toBe(false)
    expect(isIndexed((function*() {})())).toBe(false)
    expect(isIndexed(new ArrayBuffer(2))).toBe(false)
    expect(isIndexed(new Boolean(false))).toBe(false)
    expect(isIndexed(new Boolean(true))).toBe(false)
    expect(isIndexed(new Error())).toBe(false)
    expect(isIndexed(new Number(1))).toBe(false)
    expect(isIndexed(new Promise(() => {}))).toBe(false)
    expect(isIndexed(new Proxy({}, {}))).toBe(false)
    expect(isIndexed(new Set())).toBe(false)
    expect(isIndexed(Symbol('abc'))).toBe(false)
    expect(isIndexed(new WeakMap())).toBe(false)
    expect(isIndexed(new WeakSet())).toBe(false)
  })
})
