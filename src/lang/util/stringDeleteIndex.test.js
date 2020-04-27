import stringDeleteIndex from './stringDeleteIndex'

describe('stringDeleteIndex', () => {
  test('deletes an index from a String', () => {
    const string = 'abc'
    const result = stringDeleteIndex(string, 1)
    expect(result).toEqual('ac')
    expect(string).toEqual('abc')
  })

  test('deleting a non existing index returns same String', () => {
    const string = 'abc'
    const result = stringDeleteIndex(string, 3)
    expect(string).toEqual('abc')
    expect(result).toEqual('abc')
  })

  test('deleting a non existing index returns same String object', () => {
    const string = new String('abc')
    const result = stringDeleteIndex(string, 3)
    expect(string).toEqual(new String('abc'))
    expect(result).toBe(string)
  })
})
