import stringToArray from './stringToArray'

describe('stringToArray', () => {
  test('converts an ascii only string to an array', () => {
    expect(stringToArray('abc')).toEqual(['a', 'b', 'c'])
  })
})
