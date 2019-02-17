import anyIsInfinity from './anyIsInfinity'

describe('anyIsInfinity', () => {
  test('returns true for Infinity and -Infinity', () => {
    expect(anyIsInfinity(Infinity)).toBe(true)
    expect(anyIsInfinity(-Infinity)).toBe(true)
  })

  test('returns true for native Number object Infinity and -Infinity', () => {
    expect(anyIsInfinity(new Number(Infinity))).toBe(true)
    expect(anyIsInfinity(new Number(-Infinity))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsInfinity(undefined)).toBe(false)
    expect(anyIsInfinity(null)).toBe(false)
    expect(anyIsInfinity('')).toBe(false)
    expect(anyIsInfinity('abc')).toBe(false)
    expect(anyIsInfinity(false)).toBe(false)
    expect(anyIsInfinity(true)).toBe(false)
    expect(anyIsInfinity(0)).toBe(false)
    expect(anyIsInfinity(-1)).toBe(false)
    expect(anyIsInfinity(1)).toBe(false)
    expect(anyIsInfinity(NaN)).toBe(false)
    expect(anyIsInfinity({})).toBe(false)
    expect(anyIsInfinity([])).toBe(false)
    expect(anyIsInfinity(new Array(0))).toBe(false)
    expect(anyIsInfinity([0])).toBe(false)
    expect(anyIsInfinity(/abc/)).toBe(false)
    expect(anyIsInfinity(async () => {})).toBe(false)
    expect(anyIsInfinity(() => {})).toBe(false)
    expect(anyIsInfinity(function() {})).toBe(false)
    expect(anyIsInfinity((function*() {})())).toBe(false)
    expect(anyIsInfinity(new ArrayBuffer(2))).toBe(false)
    expect(anyIsInfinity(new Boolean(false))).toBe(false)
    expect(anyIsInfinity(new Boolean(true))).toBe(false)
    expect(anyIsInfinity(new Date())).toBe(false)
    expect(anyIsInfinity(new Error())).toBe(false)
    expect(anyIsInfinity(new Map())).toBe(false)
    expect(anyIsInfinity(new Number(1))).toBe(false)
    expect(anyIsInfinity(new Promise(() => {}))).toBe(false)
    expect(anyIsInfinity(new Proxy({}, {}))).toBe(false)
    expect(anyIsInfinity(new Set())).toBe(false)
    expect(anyIsInfinity(new String('abc'))).toBe(false)
    expect(anyIsInfinity(Symbol('abc'))).toBe(false)
    expect(anyIsInfinity(Symbol.for('def'))).toBe(false)
    expect(anyIsInfinity(new WeakMap())).toBe(false)
    expect(anyIsInfinity(new WeakSet())).toBe(false)
  })
})
