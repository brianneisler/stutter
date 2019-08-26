import split from './split'

describe('split', () => {
  test('splits a string by the given separator', () => {
    expect(split('.', 'a.b.c')).toEqual(['a', 'b', 'c'])
  })

  test('Throws a TypeError if separator is not a string or RegExp', () => {
    expect(() => split(123, 'foo')).toThrow(TypeError)
  })

  test('Throws a TypeError if "string" is not a string', () => {
    expect(() => split('.', {})).toThrow(TypeError)
  })
})
