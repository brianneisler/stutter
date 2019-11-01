import Type from './js/Type'
import anyIsType from './anyIsType'

describe('anyIsType', () => {
  test('returns true for a Type', () => {
    const type = new Type({
      class: class {}
    })
    expect(anyIsType(type)).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsType(undefined)).toBe(false)
    expect(anyIsType(null)).toBe(false)
    expect(anyIsType('')).toBe(false)
    expect(anyIsType('abc')).toBe(false)
    expect(anyIsType(false)).toBe(false)
    expect(anyIsType(true)).toBe(false)
    expect(anyIsType(0)).toBe(false)
    expect(anyIsType(-1)).toBe(false)
    expect(anyIsType(1)).toBe(false)
    expect(anyIsType(NaN)).toBe(false)
    expect(anyIsType(Infinity)).toBe(false)
    expect(anyIsType(-Infinity)).toBe(false)
    expect(anyIsType({})).toBe(false)
    expect(anyIsType([])).toBe(false)
    expect(anyIsType(new Array(0))).toBe(false)
    expect(anyIsType([0])).toBe(false)
    expect(anyIsType(/abc/)).toBe(false)
    expect(anyIsType(async () => {})).toBe(false)
    expect(anyIsType(() => {})).toBe(false)
    expect(anyIsType(function() {})).toBe(false)
    expect(anyIsType((function*() {})())).toBe(false)
    expect(anyIsType(Symbol('abc'))).toBe(false)
    expect(anyIsType(Symbol.for('def'))).toBe(false)
    expect(anyIsType(new ArrayBuffer(2))).toBe(false)
    expect(anyIsType(new Boolean(false))).toBe(false)
    expect(anyIsType(new Boolean(true))).toBe(false)
    expect(anyIsType(new Date())).toBe(false)
    expect(anyIsType(new Error())).toBe(false)
    expect(anyIsType(new Map())).toBe(false)
    expect(anyIsType(new Number(1))).toBe(false)
    expect(anyIsType(new Promise(() => {}))).toBe(false)
    expect(anyIsType(new Proxy({}, {}))).toBe(false)
    expect(anyIsType(new Set())).toBe(false)
    expect(anyIsType(new String('abc'))).toBe(false)
    expect(anyIsType(new WeakMap())).toBe(false)
    expect(anyIsType(new WeakSet())).toBe(false)
  })
})