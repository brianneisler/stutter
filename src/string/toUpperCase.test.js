import __ from '../common/__'
import toUpperCase from './toUpperCase'

describe('toUpperCase', () => {
  test('converts lower case string to upper case', () => {
    expect(toUpperCase('abc')).toBe('ABC')
  })

  test('preserves upper case', () => {
    expect(toUpperCase('ABC')).toBe('ABC')
  })

  test('converts to a string if the value is not a string', () => {
    expect(toUpperCase({})).toBe('[OBJECT OBJECT]')
    expect(toUpperCase([])).toBe('')
  })

  test('throws error on null or undefined value', () => {
    expect(() => toUpperCase(null)).toThrow(
      /^String.prototype.toUpperCase called on null or undefined/
    )
    expect(() => toUpperCase(undefined)).toThrow(
      /^String.prototype.toUpperCase called on null or undefined/
    )
  })

  test('upgrades to async if given a Promise', async () => {
    const result = toUpperCase(Promise.resolve('foo'))
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toBe('FOO')
  })

  test('dispatches to the toUpperCase method if it exists', () => {
    const object = {
      toUpperCase: () => 'ABC'
    }
    expect(toUpperCase(object)).toBe('ABC')
  })

  test('curries method with placeholder', () => {
    const testToUpperCase = toUpperCase(__)
    expect(testToUpperCase('foo')).toBe('FOO')
  })
})
