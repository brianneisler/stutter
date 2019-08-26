import isPrototype from './isPrototype'

describe('isPrototype', () => {
  it('returns true for an object prototype', () => {
    const value = {}
    expect(isPrototype(Object.getPrototypeOf(value))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isPrototype(undefined)).toBe(false)
    expect(isPrototype(null)).toBe(false)
    expect(isPrototype('')).toBe(false)
    expect(isPrototype('abc')).toBe(false)
    expect(isPrototype(false)).toBe(false)
    expect(isPrototype(true)).toBe(false)
    expect(isPrototype(0)).toBe(false)
    expect(isPrototype(-1)).toBe(false)
    expect(isPrototype(1)).toBe(false)
    expect(isPrototype(NaN)).toBe(false)
    expect(isPrototype(Infinity)).toBe(false)
    expect(isPrototype(-Infinity)).toBe(false)
    expect(isPrototype([])).toBe(false)
    expect(isPrototype(new Array(0))).toBe(false)
    expect(isPrototype([0])).toBe(false)
    expect(isPrototype({})).toBe(false)
    expect(isPrototype(/abc/)).toBe(false)
    expect(isPrototype(async () => {})).toBe(false)
    expect(isPrototype(() => {})).toBe(false)
    expect(isPrototype(function() {})).toBe(false)
    expect(isPrototype((function*() {})())).toBe(false)
    expect(isPrototype(new ArrayBuffer(2))).toBe(false)
    expect(isPrototype(new Boolean(false))).toBe(false)
    expect(isPrototype(new Boolean(true))).toBe(false)
    expect(isPrototype(new Date())).toBe(false)
    expect(isPrototype(new Error())).toBe(false)
    expect(isPrototype(new Map())).toBe(false)
    expect(isPrototype(new Number(1))).toBe(false)
    expect(isPrototype(new Promise(() => {}))).toBe(false)
    expect(isPrototype(new Proxy({}, {}))).toBe(false)
    expect(isPrototype(new Set())).toBe(false)
    expect(isPrototype(new String('abc'))).toBe(false)
    expect(isPrototype(Symbol('abc'))).toBe(false)
    expect(isPrototype(Symbol.for('def'))).toBe(false)
    expect(isPrototype(new WeakMap())).toBe(false)
    expect(isPrototype(new WeakSet())).toBe(false)
  })
})
