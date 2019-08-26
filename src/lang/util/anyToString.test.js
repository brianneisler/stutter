import anyToString from './anyToString'

describe('anyToString', () => {
  test('converts null and undefined to empty string', () => {
    expect(anyToString(null)).toBe('')
    expect(anyToString(undefined)).toBe('')
  })

  test('string is string', () => {
    expect(anyToString('abc')).toBe('abc')
    expect(anyToString(new String('abc'))).toBe('abc')
    expect(anyToString('')).toBe('')
  })

  test('preserves negative sign on negative 0', () => {
    expect(anyToString(-0)).toBe('-0')
  })

  test('converts Array to comma delimited string', () => {
    expect(anyToString([1, 2, 3])).toBe('1,2,3')
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
