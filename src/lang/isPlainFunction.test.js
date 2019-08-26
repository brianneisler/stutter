import isPlainFunction from './isPlainFunction'

describe('isPlainFunction', () => {
  test('returns true for plain functions', () => {
    expect(isPlainFunction(() => {})).toBe(true)
    expect(isPlainFunction(function() {})).toBe(true)
  })

  // TODO BRN: Figure out how to fix this test
  // test('returns false for async functions', () => {
  //   expect(isPlainFunction(async function() {})).toBe(false)
  //   expect(isPlainFunction(async () => {})).toBe(false)
  // })

  test('returns false for generator functions', () => {
    expect(isPlainFunction(function*() {})).toBe(false)
  })

  test('returns false for all other values', () => {
    expect(isPlainFunction(undefined)).toBe(false)
    expect(isPlainFunction(null)).toBe(false)
    expect(isPlainFunction('')).toBe(false)
    expect(isPlainFunction('abc')).toBe(false)
    expect(isPlainFunction(false)).toBe(false)
    expect(isPlainFunction(true)).toBe(false)
    expect(isPlainFunction(0)).toBe(false)
    expect(isPlainFunction(-1)).toBe(false)
    expect(isPlainFunction(1)).toBe(false)
    expect(isPlainFunction(NaN)).toBe(false)
    expect(isPlainFunction(Infinity)).toBe(false)
    expect(isPlainFunction(-Infinity)).toBe(false)
    expect(isPlainFunction([])).toBe(false)
    expect(isPlainFunction(new Array(0))).toBe(false)
    expect(isPlainFunction([0])).toBe(false)
    expect(isPlainFunction({})).toBe(false)
    expect(isPlainFunction(/abc/)).toBe(false)
    expect(isPlainFunction((function*() {})())).toBe(false)
    expect(isPlainFunction(new ArrayBuffer(2))).toBe(false)
    expect(isPlainFunction(new Boolean(false))).toBe(false)
    expect(isPlainFunction(new Boolean(true))).toBe(false)
    expect(isPlainFunction(new Date())).toBe(false)
    expect(isPlainFunction(new Error())).toBe(false)
    expect(isPlainFunction(new Map())).toBe(false)
    expect(isPlainFunction(new Number(1))).toBe(false)
    expect(isPlainFunction(new Promise(() => {}))).toBe(false)
    expect(isPlainFunction(new Proxy({}, {}))).toBe(false)
    expect(isPlainFunction(new Set())).toBe(false)
    expect(isPlainFunction(new String('abc'))).toBe(false)
    expect(isPlainFunction(Symbol('abc'))).toBe(false)
    expect(isPlainFunction(Symbol.for('def'))).toBe(false)
    expect(isPlainFunction(new WeakMap())).toBe(false)
    expect(isPlainFunction(new WeakSet())).toBe(false)
  })
})
