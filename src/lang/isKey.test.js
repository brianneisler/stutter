import isKey from './isKey'

describe('isKey', () => {
  test('returns true for primitive strings', () => {
    expect(isKey('foo')).toBe(true)
    expect(isKey('bar-')).toBe(true)
    expect(isKey('bar1')).toBe(true)
    expect(isKey('1bar')).toBe(true)
    expect(isKey('123')).toBe(true)
    expect(isKey('-123')).toBe(true)
    expect(isKey('0')).toBe(true)
  })

  test('returns true for Symbols', () => {
    expect(isKey(Symbol('abc'))).toBe(true)
    expect(isKey(Symbol.for('foo'))).toBe(true)
  })

  test('returns true for String objects', () => {
    expect(isKey(new String('foo'))).toBe(false)
    expect(isKey(new String('bar-'))).toBe(false)
    expect(isKey(new String('bar1'))).toBe(false)
    expect(isKey(new String('1bar'))).toBe(false)
    expect(isKey(new String('123'))).toBe(false)
    expect(isKey(new String('-123'))).toBe(false)
    expect(isKey(new String('0'))).toBe(false)
  })

  test('returns true for arrays', () => {
    expect(isKey([])).toBe(true)
    expect(isKey(new Array())).toBe(true)
  })

  test('returns false for paths', () => {
    expect(isKey('foo.bar')).toBe(false)
    expect(isKey('foo[1]')).toBe(false)
    expect(isKey("foo['abc']")).toBe(false)
  })

  test('returns true for paths that are actual keys', () => {
    expect(isKey('foo.bar', new Map([['foo.bar', 'value']]))).toBe(true)

    expect(isKey('foo[1]', new Map([['foo[1]', 'value']]))).toBe(true)

    expect(isKey("foo['abc']", new Map([["foo['abc']", 'value']]))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(isKey(undefined)).toBe(false)
    expect(isKey(null)).toBe(false)
    expect(isKey(false)).toBe(false)
    expect(isKey(true)).toBe(false)
    expect(isKey(0)).toBe(false)
    expect(isKey(-1)).toBe(false)
    expect(isKey(1)).toBe(false)
    expect(isKey(NaN)).toBe(false)
    expect(isKey(Infinity)).toBe(false)
    expect(isKey(-Infinity)).toBe(false)
    expect(isKey(/abc/)).toBe(false)
    expect(isKey(async () => {})).toBe(false)
    expect(isKey(() => {})).toBe(false)
    expect(isKey(function() {})).toBe(false)
    expect(isKey(function*() {})).toBe(false)
    expect(isKey(new ArrayBuffer(2))).toBe(false)
    expect(isKey(new Boolean(false))).toBe(false)
    expect(isKey(new Boolean(true))).toBe(false)
    expect(isKey(new Date())).toBe(false)
    expect(isKey(new Error())).toBe(false)
    expect(isKey(new Number(-1.2))).toBe(false)
    expect(isKey(new Number(1.2))).toBe(false)
    expect(isKey(new Number(NaN))).toBe(false)
    expect(isKey(new Number(Infinity))).toBe(false)
    expect(isKey(new Number(-Infinity))).toBe(false)
    expect(isKey(new Promise(() => {}))).toBe(false)
    expect(isKey(new Proxy({}, {}))).toBe(false)
    expect(isKey(new WeakMap())).toBe(false)
    expect(isKey(new WeakSet())).toBe(false)
  })
})
