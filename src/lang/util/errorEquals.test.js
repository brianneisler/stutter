import errorEquals from './errorEquals'

describe('errorEquals', () => {
  test('returns true for two Errors that are the same but different instances', () => {
    expect(errorEquals(new Error('foo'), new Error('foo'))).toBe(true)
  })

  test('returns false for different Errors', () => {
    expect(errorEquals(new Error('foo'), new Error('bar'))).toBe(false)
  })
})
