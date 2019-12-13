import stringGetIndex from './stringGetIndex'

describe('stringGetIndex', () => {
  test('gets Index from a String', () => {
    const string = 'abc'
    expect(stringGetIndex(string, 0)).toEqual('a')
  })

  test('returns undefined for an index that does not exist', () => {
    const string = 'abc'
    expect(stringGetIndex(string, 3)).toEqual(undefined)
  })
})
