import isSet from './isSet'

describe('isSet', () => {
  test('returns true for instances of Set', () => {
    expect(isSet(new Set())).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isSet(undefined)).toBe(false)
    expect(isSet(null)).toBe(false)
    expect(isSet('')).toBe(false)
    expect(isSet('abc')).toBe(false)
    expect(isSet(false)).toBe(false)
    expect(isSet(true)).toBe(false)
    expect(isSet(0)).toBe(false)
    expect(isSet(-1)).toBe(false)
    expect(isSet(1)).toBe(false)
    expect(isSet(NaN)).toBe(false)
    expect(isSet(Infinity)).toBe(false)
    expect(isSet(-Infinity)).toBe(false)
    expect(isSet({})).toBe(false)
    expect(isSet([])).toBe(false)
    expect(isSet(/abc/)).toBe(false)
    expect(isSet(new RegExp('abc'))).toBe(false)
    expect(isSet(async () => {})).toBe(false)
    expect(isSet(() => {})).toBe(false)
    expect(isSet(function() {})).toBe(false)
    expect(isSet(function*() {})).toBe(false)
    expect(isSet((function*() {})())).toBe(false)
    expect(isSet(new Array(0))).toBe(false)
    expect(isSet(new ArrayBuffer(2))).toBe(false)
    expect(isSet(new Boolean(false))).toBe(false)
    expect(isSet(new Boolean(true))).toBe(false)
    expect(isSet(new Date())).toBe(false)
    expect(isSet(new Error())).toBe(false)
    expect(isSet(new Number(1))).toBe(false)
    expect(isSet(new Promise(() => {}))).toBe(false)
    expect(isSet(new Proxy({}, {}))).toBe(false)
    expect(isSet(new String('abc'))).toBe(false)
    expect(isSet(Symbol('abc'))).toBe(false)
    expect(isSet(new WeakMap())).toBe(false)
    expect(isSet(new WeakSet())).toBe(false)
  })
})
