import isTypedArray from './isTypedArray'

describe('isTypedArray', () => {
  test('returns true for Uint8Array', () => {
    expect(isTypedArray(new Uint8Array(2))).toBe(true)
  })

  test('returns true for Float32Array', () => {
    expect(isTypedArray(new Float32Array(2))).toBe(true)
  })

  test('returns true for Float64Array', () => {
    expect(isTypedArray(new Float64Array(2))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isTypedArray(undefined)).toBe(false)
    expect(isTypedArray(null)).toBe(false)
    expect(isTypedArray('')).toBe(false)
    expect(isTypedArray('abc')).toBe(false)
    expect(isTypedArray(false)).toBe(false)
    expect(isTypedArray(true)).toBe(false)
    expect(isTypedArray(0)).toBe(false)
    expect(isTypedArray(-1)).toBe(false)
    expect(isTypedArray(1)).toBe(false)
    expect(isTypedArray(NaN)).toBe(false)
    expect(isTypedArray(Infinity)).toBe(false)
    expect(isTypedArray(-Infinity)).toBe(false)
    expect(isTypedArray({})).toBe(false)
    expect(isTypedArray([])).toBe(false)
    expect(isTypedArray(new Array(0))).toBe(false)
    expect(isTypedArray([0])).toBe(false)
    expect(isTypedArray(/abc/)).toBe(false)
    expect(isTypedArray(async () => {})).toBe(false)
    expect(isTypedArray(() => {})).toBe(false)
    expect(isTypedArray(function() {})).toBe(false)
    expect(isTypedArray((function*() {})())).toBe(false)
    expect(isTypedArray(Symbol('abc'))).toBe(false)
    expect(isTypedArray(Symbol.for('def'))).toBe(false)
    expect(isTypedArray(new ArrayBuffer(2))).toBe(false)
    expect(isTypedArray(new Boolean(false))).toBe(false)
    expect(isTypedArray(new Boolean(true))).toBe(false)
    expect(isTypedArray(new Date())).toBe(false)
    expect(isTypedArray(new Error())).toBe(false)
    expect(isTypedArray(new Map())).toBe(false)
    expect(isTypedArray(new Number(1))).toBe(false)
    expect(isTypedArray(new Promise(() => {}))).toBe(false)
    expect(isTypedArray(new Proxy({}, {}))).toBe(false)
    expect(isTypedArray(new Set())).toBe(false)
    expect(isTypedArray(new String('abc'))).toBe(false)
    expect(isTypedArray(new WeakMap())).toBe(false)
    expect(isTypedArray(new WeakSet())).toBe(false)
  })
})
