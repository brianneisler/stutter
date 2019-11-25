import anyToString from './anyToString'

describe('anyToString', () => {
  test('converts null to "null"', () => {
    expect(anyToString(null)).toBe('null')
  })

  test('converts undefined to "undefined"', () => {
    expect(anyToString(undefined)).toBe('undefined')
  })

  test('string is string', () => {
    expect(anyToString('abc')).toBe('abc')
    expect(anyToString(new String('abc'))).toBe('abc')
    expect(anyToString('')).toBe('')
  })

  test('preserves negative sign on negative 0', () => {
    expect(anyToString(-0)).toBe('-0')
  })

  test('converts Array to comma delimited string wrapped in brackets', () => {
    expect(anyToString([1, 2, 3])).toBe('[1, 2, 3]')
  })

  test('converts Arguments to comma delimited string wrapped in brackets', () => {
    const func = function() {
      expect(anyToString(arguments)).toBe('[1, 2, null]')
    }
    func(1, 2, null)
  })

  test('uses toString on objects', () => {
    expect(
      anyToString({
        toString() {
          return '{ test object }'
        }
      })
    ).toBe('{ test object }')
  })
})
