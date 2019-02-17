import anyIsTypedArray from './anyIsTypedArray'

describe('anyIsTypedArray', () => {
  test('returns true for Uint8Array', () => {
    expect(anyIsTypedArray(new Uint8Array(2))).toBe(true)
  })

  test('returns true for Float32Array', () => {
    expect(anyIsTypedArray(new Float32Array(2))).toBe(true)
  })

  test('returns true for Float64Array', () => {
    expect(anyIsTypedArray(new Float64Array(2))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsTypedArray(undefined)).toBe(false)
    expect(anyIsTypedArray(null)).toBe(false)
    expect(anyIsTypedArray('')).toBe(false)
    expect(anyIsTypedArray('abc')).toBe(false)
    expect(anyIsTypedArray(false)).toBe(false)
    expect(anyIsTypedArray(true)).toBe(false)
    expect(anyIsTypedArray(0)).toBe(false)
    expect(anyIsTypedArray(-1)).toBe(false)
    expect(anyIsTypedArray(1)).toBe(false)
    expect(anyIsTypedArray(NaN)).toBe(false)
    expect(anyIsTypedArray(Infinity)).toBe(false)
    expect(anyIsTypedArray(-Infinity)).toBe(false)
    expect(anyIsTypedArray({})).toBe(false)
    expect(anyIsTypedArray([])).toBe(false)
    expect(anyIsTypedArray(new Array(0))).toBe(false)
    expect(anyIsTypedArray([0])).toBe(false)
    expect(anyIsTypedArray(/abc/)).toBe(false)
    expect(anyIsTypedArray(async () => {})).toBe(false)
    expect(anyIsTypedArray(() => {})).toBe(false)
    expect(anyIsTypedArray(function() {})).toBe(false)
    expect(anyIsTypedArray((function*() {})())).toBe(false)
    expect(anyIsTypedArray(Symbol('abc'))).toBe(false)
    expect(anyIsTypedArray(Symbol.for('def'))).toBe(false)
    expect(anyIsTypedArray(new ArrayBuffer(2))).toBe(false)
    expect(anyIsTypedArray(new Boolean(false))).toBe(false)
    expect(anyIsTypedArray(new Boolean(true))).toBe(false)
    expect(anyIsTypedArray(new Date())).toBe(false)
    expect(anyIsTypedArray(new Error())).toBe(false)
    expect(anyIsTypedArray(new Map())).toBe(false)
    expect(anyIsTypedArray(new Number(1))).toBe(false)
    expect(anyIsTypedArray(new Promise(() => {}))).toBe(false)
    expect(anyIsTypedArray(new Proxy({}, {}))).toBe(false)
    expect(anyIsTypedArray(new Set())).toBe(false)
    expect(anyIsTypedArray(new String('abc'))).toBe(false)
    expect(anyIsTypedArray(new WeakMap())).toBe(false)
    expect(anyIsTypedArray(new WeakSet())).toBe(false)
  })
})
