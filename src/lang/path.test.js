import path from './path'

describe('path', () => {
  test('casts an existing property with dots to a prop', () => {
    expect(path('a.b', { 'a.b': 'foo' })).toEqual(['a.b'])
  })

  test('casts an existing array key as an element in an array path', () => {
    const arrayKey = ['foo']
    const map = new Map([[arrayKey, {}]])
    expect(path(arrayKey, map)).toEqual([arrayKey])
  })

  test('preserves an array as an array', () => {
    expect(path(['a', 'b'])).toEqual(['a', 'b'])
  })
})
