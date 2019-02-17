import asciiSize from './asciiSize'

describe('asciiSize', () => {
  test('gets the size of an ascii only string', () => {
    expect(asciiSize('abc')).toBe(3)
  })
})
