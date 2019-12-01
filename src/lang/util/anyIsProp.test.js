import anyIsProp from './anyIsProp'

describe('anyIsProp', () => {
  test('returns true for plain prop', () => {
    expect(anyIsProp('foo')).toBe(true)
    expect(anyIsProp('bar-')).toBe(true)
    expect(anyIsProp('bar1')).toBe(true)
    expect(anyIsProp('1bar')).toBe(true)
  })

  test('returns true for numeric strings', () => {
    expect(anyIsProp('123')).toBe(true)
    expect(anyIsProp('-123')).toBe(true)
    expect(anyIsProp('0')).toBe(true)
  })

  test('returns true for Symbols', () => {
    expect(anyIsProp(Symbol('abc'))).toBe(true)
    expect(anyIsProp(Symbol.for('foo'))).toBe(true)
  })

  test('returns true for plain prop String objects', () => {
    expect(anyIsProp(new String('foo'))).toBe(true)
    expect(anyIsProp(new String('bar-'))).toBe(true)
    expect(anyIsProp(new String('bar1'))).toBe(true)
    expect(anyIsProp(new String('1bar'))).toBe(true)
  })

  test('returns false for arrays', () => {
    expect(anyIsProp([])).toBe(false)
    expect(anyIsProp(new Array())).toBe(false)
  })

  test('returns false for all other values', () => {
    expect(anyIsProp(undefined)).toBe(false)
    expect(anyIsProp(null)).toBe(false)
    expect(anyIsProp(false)).toBe(false)
    expect(anyIsProp(true)).toBe(false)
    expect(anyIsProp(0)).toBe(false)
    expect(anyIsProp(-1)).toBe(false)
    expect(anyIsProp(1)).toBe(false)
    expect(anyIsProp(NaN)).toBe(false)
    expect(anyIsProp(Infinity)).toBe(false)
    expect(anyIsProp(-Infinity)).toBe(false)
    expect(anyIsProp(/abc/)).toBe(false)
    expect(anyIsProp(async () => {})).toBe(false)
    expect(anyIsProp(() => {})).toBe(false)
    expect(anyIsProp(function() {})).toBe(false)
    expect(anyIsProp(function*() {})).toBe(false)
    expect(anyIsProp(new ArrayBuffer(2))).toBe(false)
    expect(anyIsProp(new Boolean(false))).toBe(false)
    expect(anyIsProp(new Boolean(true))).toBe(false)
    expect(anyIsProp(new Date())).toBe(false)
    expect(anyIsProp(new Error())).toBe(false)
    expect(anyIsProp(new Number(-1.2))).toBe(false)
    expect(anyIsProp(new Number(1.2))).toBe(false)
    expect(anyIsProp(new Number(NaN))).toBe(false)
    expect(anyIsProp(new Number(Infinity))).toBe(false)
    expect(anyIsProp(new Number(-Infinity))).toBe(false)
    expect(anyIsProp(new Promise(() => {}))).toBe(false)
    expect(anyIsProp(new Proxy({}, {}))).toBe(false)
    expect(anyIsProp(new WeakMap())).toBe(false)
    expect(anyIsProp(new WeakSet())).toBe(false)
  })
})
