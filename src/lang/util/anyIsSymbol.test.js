import anyIsSymbol from './anyIsSymbol'

describe('anyIsSymbol', () => {
  test('returns true for Symbols', () => {
    expect(anyIsSymbol(Symbol('abc'))).toBe(true)
    expect(anyIsSymbol(Symbol.for('def'))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsSymbol(undefined)).toBe(false)
    expect(anyIsSymbol(null)).toBe(false)
    expect(anyIsSymbol('')).toBe(false)
    expect(anyIsSymbol('abc')).toBe(false)
    expect(anyIsSymbol(false)).toBe(false)
    expect(anyIsSymbol(true)).toBe(false)
    expect(anyIsSymbol(0)).toBe(false)
    expect(anyIsSymbol(-1)).toBe(false)
    expect(anyIsSymbol(1)).toBe(false)
    expect(anyIsSymbol(NaN)).toBe(false)
    expect(anyIsSymbol(Infinity)).toBe(false)
    expect(anyIsSymbol(-Infinity)).toBe(false)
    expect(anyIsSymbol({})).toBe(false)
    expect(anyIsSymbol([])).toBe(false)
    expect(anyIsSymbol(new Array(0))).toBe(false)
    expect(anyIsSymbol([0])).toBe(false)
    expect(anyIsSymbol(/abc/)).toBe(false)
    expect(anyIsSymbol(async () => {})).toBe(false)
    expect(anyIsSymbol(() => {})).toBe(false)
    expect(anyIsSymbol(function() {})).toBe(false)
    expect(anyIsSymbol((function*() {})())).toBe(false)
    expect(anyIsSymbol(new ArrayBuffer(2))).toBe(false)
    expect(anyIsSymbol(new Boolean(false))).toBe(false)
    expect(anyIsSymbol(new Boolean(true))).toBe(false)
    expect(anyIsSymbol(new Date())).toBe(false)
    expect(anyIsSymbol(new Error())).toBe(false)
    expect(anyIsSymbol(new Map())).toBe(false)
    expect(anyIsSymbol(new Number(1))).toBe(false)
    expect(anyIsSymbol(new Promise(() => {}))).toBe(false)
    expect(anyIsSymbol(new Proxy({}, {}))).toBe(false)
    expect(anyIsSymbol(new Set())).toBe(false)
    expect(anyIsSymbol(new String('abc'))).toBe(false)
    expect(anyIsSymbol(new WeakMap())).toBe(false)
    expect(anyIsSymbol(new WeakSet())).toBe(false)
  })
})
