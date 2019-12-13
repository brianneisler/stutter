import stringUpdateIndex from './stringUpdateIndex'

describe('stringUpdateIndex', () => {
  test('updates an Index in an String where the index exists', () => {
    const string = 'abc'
    const func = jest.fn(() => 'd')
    const result = stringUpdateIndex(string, 1, func)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func).toHaveBeenCalledWith('b')
    expect(result).toEqual('adc')
    expect(string).toEqual('abc')
  })

  test('updates a non existing Index in an String', () => {
    const string = 'abc'
    const func = jest.fn(() => 'd')
    const result = stringUpdateIndex(string, 3, func)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func).toHaveBeenCalledWith(undefined)
    expect(result).toEqual('abcd')
    expect(string).toEqual('abc')
  })

  test('updates a non existing Index greater than the length at the end of the String', () => {
    const string = 'abc'
    const result = stringUpdateIndex(string, 5, () => 'e')
    expect(result).toEqual('abce')
    expect(result.length).toEqual(4)
    expect(string).toEqual('abc')
    expect(string.length).toEqual(3)
  })

  test('updating an existing Index to the same value returns the same String', () => {
    const string = 'abc'
    const result = stringUpdateIndex(string, 1, () => 'b')
    expect(result).toEqual('abc')
    expect(result).toBe(string)
  })

  test('upating more than one character in a string replaces the existing character and injects the full string', () => {
    const string = 'abf'
    const result = stringUpdateIndex(string, 1, () => 'bcde')
    expect(result).toEqual('abcdef')
    expect(string).toEqual('abf')
  })
})
