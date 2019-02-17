import stringRepeat from './stringRepeat'

describe('stringRepeat', () => {
  test('repeats a string', () => {
    expect(stringRepeat('abc', 3)).toBe('abcabcabc')
  })

  test('returns empty string if n is 0', () => {
    expect(stringRepeat('abc', 0)).toBe('')
  })
})
