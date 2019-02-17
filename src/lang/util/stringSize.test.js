import stringSize from './stringSize'

describe('stringSize', () => {
  test('returns the size of an ascii only string', () => {
    expect(stringSize('abc')).toBe(3)
  })
})
