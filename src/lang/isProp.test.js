import isProp from './isProp'

describe('isProp', () => {
  test('returns true for plain prop', () => {
    expect(isProp('foo')).toBe(true)
    expect(isProp('bar-')).toBe(true)
    expect(isProp('bar1')).toBe(true)
    expect(isProp('1bar')).toBe(true)
  })

  test('returns true for numeric strings', () => {
    expect(isProp('123')).toBe(true)
    expect(isProp('-123')).toBe(true)
    expect(isProp('0')).toBe(true)
  })

  test('returns true for Symbols', () => {
    expect(isProp(Symbol('abc'))).toBe(true)
    expect(isProp(Symbol.for('foo'))).toBe(true)
  })

  test('returns false for plain prop String objects', () => {
    expect(isProp(new String('foo'))).toBe(false)
    expect(isProp(new String('bar-'))).toBe(false)
    expect(isProp(new String('bar1'))).toBe(false)
    expect(isProp(new String('1bar'))).toBe(false)
  })

  test('returns false for arrays', () => {
    expect(isProp([])).toBe(false)
    expect(isProp(new Array())).toBe(false)
  })

  test('returns false for prop paths', () => {
    expect(isProp('foo.bar')).toBe(false)
    expect(isProp('foo[1]')).toBe(false)
    expect(isProp("foo['abc']")).toBe(false)
  })

  test('returns true for prop paths that are actual props', () => {
    expect(
      isProp('foo.bar', {
        'foo.bar': 'value'
      })
    ).toBe(true)
    expect(
      isProp('foo[1]', {
        'foo[1]': 'value'
      })
    ).toBe(true)
    expect(
      isProp("foo['abc']", {
        "foo['abc']": 'value'
      })
    ).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isProp(undefined)).toBe(false)
    expect(isProp(null)).toBe(false)
    expect(isProp(false)).toBe(false)
    expect(isProp(true)).toBe(false)
    expect(isProp(0)).toBe(false)
    expect(isProp(-1)).toBe(false)
    expect(isProp(1)).toBe(false)
    expect(isProp(NaN)).toBe(false)
    expect(isProp(Infinity)).toBe(false)
    expect(isProp(-Infinity)).toBe(false)
    expect(isProp(/abc/)).toBe(false)
    expect(isProp(async () => {})).toBe(false)
    expect(isProp(() => {})).toBe(false)
    expect(isProp(function() {})).toBe(false)
    expect(isProp(function*() {})).toBe(false)
    expect(isProp(new ArrayBuffer(2))).toBe(false)
    expect(isProp(new Boolean(false))).toBe(false)
    expect(isProp(new Boolean(true))).toBe(false)
    expect(isProp(new Date())).toBe(false)
    expect(isProp(new Error())).toBe(false)
    expect(isProp(new Number(-1.2))).toBe(false)
    expect(isProp(new Number(1.2))).toBe(false)
    expect(isProp(new Number(NaN))).toBe(false)
    expect(isProp(new Number(Infinity))).toBe(false)
    expect(isProp(new Number(-Infinity))).toBe(false)
    expect(isProp(new Promise(() => {}))).toBe(false)
    expect(isProp(new Proxy({}, {}))).toBe(false)
    expect(isProp(new WeakMap())).toBe(false)
    expect(isProp(new WeakSet())).toBe(false)
  })
})
