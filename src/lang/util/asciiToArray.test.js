import asciiToArray from './asciiToArray'

describe('asciiToArray', () => {
  test('converts an ascii string to an array', () => {
    expect(asciiToArray('abc')).toEqual(['a', 'b', 'c'])
  })
})
