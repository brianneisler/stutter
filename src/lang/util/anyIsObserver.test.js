import anyIsObserver from './anyIsObserver'

describe('anyIsObserver', () => {
  test('returns true for object with then method', () => {
    expect(
      anyIsObserver({
        complete: () => {},
        error: () => {},
        next: () => {}
      })
    ).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsObserver(undefined)).toBe(false)
    expect(anyIsObserver(null)).toBe(false)
    expect(anyIsObserver('')).toBe(false)
    expect(anyIsObserver('abc')).toBe(false)
    expect(anyIsObserver(false)).toBe(false)
    expect(anyIsObserver(true)).toBe(false)
    expect(anyIsObserver(0)).toBe(false)
    expect(anyIsObserver(-1)).toBe(false)
    expect(anyIsObserver(1)).toBe(false)
    expect(anyIsObserver(NaN)).toBe(false)
    expect(anyIsObserver(Infinity)).toBe(false)
    expect(anyIsObserver(-Infinity)).toBe(false)
    expect(anyIsObserver({})).toBe(false)
    expect(anyIsObserver([])).toBe(false)
    expect(anyIsObserver(new Array(0))).toBe(false)
    expect(anyIsObserver([0])).toBe(false)
    expect(anyIsObserver(/abc/)).toBe(false)
    expect(anyIsObserver(async () => {})).toBe(false)
    expect(anyIsObserver(() => {})).toBe(false)
    expect(anyIsObserver(function () {})).toBe(false)
    expect(anyIsObserver((function* () {})())).toBe(false)
    expect(anyIsObserver(new ArrayBuffer(2))).toBe(false)
    expect(anyIsObserver(new Boolean(false))).toBe(false)
    expect(anyIsObserver(new Boolean(true))).toBe(false)
    expect(anyIsObserver(new Date())).toBe(false)
    expect(anyIsObserver(new Error())).toBe(false)
    expect(anyIsObserver(new Map())).toBe(false)
    expect(anyIsObserver(new Number(1))).toBe(false)
    expect(anyIsObserver(new Promise(() => {}))).toBe(false)
    expect(anyIsObserver(new Proxy({}, {}))).toBe(false)
    expect(anyIsObserver(new Set())).toBe(false)
    expect(anyIsObserver(new String('abc'))).toBe(false)
    expect(anyIsObserver(Symbol('abc'))).toBe(false)
    expect(anyIsObserver(new WeakMap())).toBe(false)
    expect(anyIsObserver(new WeakSet())).toBe(false)
  })
})
