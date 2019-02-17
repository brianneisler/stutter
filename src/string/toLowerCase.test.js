import __ from '../common/__'
import toLowerCase from './toLowerCase'

describe('toLowerCase', () => {
  test('converts upper case string to lower case', () => {
    expect(toLowerCase('ABC')).toBe('abc')
  })

  test('preserves lower case', () => {
    expect(toLowerCase('abc')).toBe('abc')
  })

  test('converts to a string if the value is not a string', () => {
    expect(toLowerCase({})).toBe('[object object]')
    expect(toLowerCase([])).toBe('')
  })

  test('throws error on null or undefined value', () => {
    expect(() => toLowerCase(null)).toThrow(
      /^String.prototype.toLowerCase called on null or undefined/
    )
    expect(() => toLowerCase(undefined)).toThrow(
      /^String.prototype.toLowerCase called on null or undefined/
    )
  })

  test('upgrades to async if given a Promise', async () => {
    const result = toLowerCase(Promise.resolve('FOO'))
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toBe('foo')
  })

  test('dispatches to the toLowerCase method if it exists', () => {
    const object = {
      toLowerCase: () => 'abc'
    }
    expect(toLowerCase(object)).toBe('abc')
  })

  test('curries method with placeholder', () => {
    const testToLowerCase = toLowerCase(__)
    expect(testToLowerCase('FOO')).toBe('foo')
  })
})
