import unicodeSize from './unicodeSize'

describe('unicodeSize', () => {
  it('gets the size of an ascii only string', () => {
    expect(unicodeSize('')).toBe(0)
    expect(unicodeSize('abc')).toBe(3)
  })

  it('gets the size of a string with non ascii characters', () => {
    expect(unicodeSize('æiouAreVowels')).toBe(13)
  })
})
