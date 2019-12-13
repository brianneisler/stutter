import isProperty from './isProperty'

describe('isProperty', () => {
  test('returns true for plain prop', () => {
    expect(isProperty('foo')).toBe(true)
    expect(isProperty('bar-')).toBe(true)
    expect(isProperty('bar1')).toBe(true)
    expect(isProperty('1bar')).toBe(true)
  })

  test('returns true for numeric strings', () => {
    expect(isProperty('123')).toBe(true)
    expect(isProperty('-123')).toBe(true)
    expect(isProperty('0')).toBe(true)
  })

  test('returns true for Symbols', () => {
    expect(isProperty(Symbol('abc'))).toBe(true)
    expect(isProperty(Symbol.for('foo'))).toBe(true)
  })

  test('returns false for plain prop String objects', () => {
    expect(isProperty(new String('foo'))).toBe(false)
    expect(isProperty(new String('bar-'))).toBe(false)
    expect(isProperty(new String('bar1'))).toBe(false)
    expect(isProperty(new String('1bar'))).toBe(false)
  })

  test('returns false for arrays', () => {
    expect(isProperty([])).toBe(false)
    expect(isProperty(new Array())).toBe(false)
  })

  test('returns false for prop paths', () => {
    expect(isProperty('foo.bar')).toBe(false)
    expect(isProperty('foo[1]')).toBe(false)
    expect(isProperty("foo['abc']")).toBe(false)
  })

  test('returns true for prop paths that are actual props', () => {
    expect(
      isProperty('foo.bar', {
        'foo.bar': 'value'
      })
    ).toBe(true)
    expect(
      isProperty('foo[1]', {
        'foo[1]': 'value'
      })
    ).toBe(true)
    expect(
      isProperty("foo['abc']", {
        "foo['abc']": 'value'
      })
    ).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isProperty(undefined)).toBe(false)
    expect(isProperty(null)).toBe(false)
    expect(isProperty(false)).toBe(false)
    expect(isProperty(true)).toBe(false)
    expect(isProperty(0)).toBe(false)
    expect(isProperty(-1)).toBe(false)
    expect(isProperty(1)).toBe(false)
    expect(isProperty(NaN)).toBe(false)
    expect(isProperty(Infinity)).toBe(false)
    expect(isProperty(-Infinity)).toBe(false)
    expect(isProperty(/abc/)).toBe(false)
    expect(isProperty(async () => {})).toBe(false)
    expect(isProperty(() => {})).toBe(false)
    expect(isProperty(function() {})).toBe(false)
    expect(isProperty(function*() {})).toBe(false)
    expect(isProperty(new ArrayBuffer(2))).toBe(false)
    expect(isProperty(new Boolean(false))).toBe(false)
    expect(isProperty(new Boolean(true))).toBe(false)
    expect(isProperty(new Date())).toBe(false)
    expect(isProperty(new Error())).toBe(false)
    expect(isProperty(new Number(-1.2))).toBe(false)
    expect(isProperty(new Number(1.2))).toBe(false)
    expect(isProperty(new Number(NaN))).toBe(false)
    expect(isProperty(new Number(Infinity))).toBe(false)
    expect(isProperty(new Number(-Infinity))).toBe(false)
    expect(isProperty(new Promise(() => {}))).toBe(false)
    expect(isProperty(new Proxy({}, {}))).toBe(false)
    expect(isProperty(new WeakMap())).toBe(false)
    expect(isProperty(new WeakSet())).toBe(false)
  })
})
