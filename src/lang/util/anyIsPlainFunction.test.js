import anyIsPlainFunction from './anyIsPlainFunction'

describe('anyIsPlainFunction', () => {
  test('returns true for plain functions', () => {
    expect(anyIsPlainFunction(() => {})).toBe(true)
    expect(anyIsPlainFunction(function() {})).toBe(true)
  })

  // TODO BRN: Figure out how to fix this test
  // test('returns false for async functions', () => {
  //   expect(anyIsPlainFunction(async function() {})).toBe(false)
  //   expect(anyIsPlainFunction(async () => {})).toBe(false)
  // })

  test('returns false for generator functions', () => {
    expect(anyIsPlainFunction(function*() {})).toBe(false)
  })

  test('returns false for all other values', () => {
    expect(anyIsPlainFunction(undefined)).toBe(false)
    expect(anyIsPlainFunction(null)).toBe(false)
    expect(anyIsPlainFunction('')).toBe(false)
    expect(anyIsPlainFunction('abc')).toBe(false)
    expect(anyIsPlainFunction(false)).toBe(false)
    expect(anyIsPlainFunction(true)).toBe(false)
    expect(anyIsPlainFunction(0)).toBe(false)
    expect(anyIsPlainFunction(-1)).toBe(false)
    expect(anyIsPlainFunction(1)).toBe(false)
    expect(anyIsPlainFunction(NaN)).toBe(false)
    expect(anyIsPlainFunction(Infinity)).toBe(false)
    expect(anyIsPlainFunction(-Infinity)).toBe(false)
    expect(anyIsPlainFunction([])).toBe(false)
    expect(anyIsPlainFunction(new Array(0))).toBe(false)
    expect(anyIsPlainFunction([0])).toBe(false)
    expect(anyIsPlainFunction({})).toBe(false)
    expect(anyIsPlainFunction(/abc/)).toBe(false)
    expect(anyIsPlainFunction((function*() {})())).toBe(false)
    expect(anyIsPlainFunction(new ArrayBuffer(2))).toBe(false)
    expect(anyIsPlainFunction(new Boolean(false))).toBe(false)
    expect(anyIsPlainFunction(new Boolean(true))).toBe(false)
    expect(anyIsPlainFunction(new Date())).toBe(false)
    expect(anyIsPlainFunction(new Error())).toBe(false)
    expect(anyIsPlainFunction(new Map())).toBe(false)
    expect(anyIsPlainFunction(new Number(1))).toBe(false)
    expect(anyIsPlainFunction(new Promise(() => {}))).toBe(false)
    expect(anyIsPlainFunction(new Proxy({}, {}))).toBe(false)
    expect(anyIsPlainFunction(new Set())).toBe(false)
    expect(anyIsPlainFunction(new String('abc'))).toBe(false)
    expect(anyIsPlainFunction(Symbol('abc'))).toBe(false)
    expect(anyIsPlainFunction(Symbol.for('def'))).toBe(false)
    expect(anyIsPlainFunction(new WeakMap())).toBe(false)
    expect(anyIsPlainFunction(new WeakSet())).toBe(false)
  })
})
