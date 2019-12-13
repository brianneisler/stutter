import stringHasIndex from './stringHasIndex'

describe('stringHasIndex', () => {
  test('returns true for String that has Index', () => {
    const string = 'abc'
    expect(stringHasIndex(string, 0)).toEqual(true)
    expect(stringHasIndex(string, 1)).toEqual(true)
    expect(stringHasIndex(string, 2)).toEqual(true)
  })

  test('returns false for String that does not have Index', () => {
    const string = ''
    expect(stringHasIndex(string, 0)).toEqual(false)
  })
})
