import isObject from './isObject'

describe('isObject', () => {
  test('returns true for plain object', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(new Object())).toBe(true)
  })

  test('returns true for complex object', () => {
    const ComplexObject = function() {}
    expect(isObject(new ComplexObject())).toBe(true)
  })

  test('returns true for plain array', () => {
    expect(isObject([])).toBe(true)
    expect(isObject(new Array())).toBe(true)
  })

  test('returns true for functions', () => {
    expect(isObject(() => {})).toBe(true)
    expect(isObject(function() {})).toBe(true)
    expect(isObject(async () => {})).toBe(true)
    expect(isObject(async function() {})).toBe(true)
    expect(isObject(function*() {})).toBe(true)
    expect(isObject(new Function('a', 'b', 'return a + b'))).toBe(true)
    // TODO BRN: Check for ES6 Proxy support
  })

  test('returns true for object versions of primitive values', () => {
    expect(isObject(new Boolean(false))).toBe(true)
    expect(isObject(new Number(3.2))).toBe(true)
    expect(isObject(new String('abc'))).toBe(true)
  })

  test('returns true for native objects', () => {
    expect(isObject(new ArrayBuffer(2))).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(new Error())).toBe(true)
    expect(isObject(new Map())).toBe(true)
    expect(isObject(new Promise(() => {}))).toBe(true)
    expect(isObject(new Proxy({}, {}))).toBe(true)
    expect(isObject(new Set())).toBe(true)
    expect(isObject(new WeakMap())).toBe(true)
    expect(isObject(new WeakSet())).toBe(true)
  })

  test('returns false for all primitive values', () => {
    expect(isObject(undefined)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject('')).toBe(false)
    expect(isObject('abc')).toBe(false)
    expect(isObject(false)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(0)).toBe(false)
    expect(isObject(-1)).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject(1.23)).toBe(false)
    expect(isObject(-1.23)).toBe(false)
    expect(isObject(NaN)).toBe(false)
    expect(isObject(Infinity)).toBe(false)
    expect(isObject(-Infinity)).toBe(false)
    expect(isObject(Symbol('abc'))).toBe(false)
    expect(isObject(Symbol.for('foo'))).toBe(false)
  })
})
