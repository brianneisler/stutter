import unicodeToArray from './unicodeToArray'

describe('unicodeToArray', () => {
  test('converts an ascii only string to an array', () => {
    expect(unicodeToArray('abc')).toEqual(['a', 'b', 'c'])
  })
})
