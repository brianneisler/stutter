import castPath from './castPath'

describe('castPath', () => {
  test('casts an existing property with dots to a prop', () => {
    expect(castPath('a.b', { 'a.b': 'foo' })).toEqual(['a.b'])
  })

  test('casts an existing array key as an element in an array path', () => {
    const arrayKey = ['foo']
    const map = new Map([[arrayKey, {}]])
    expect(castPath(arrayKey, map)).toEqual([arrayKey])
  })

  test('preserves an array as an array', () => {
    expect(castPath(['a', 'b'])).toEqual(['a', 'b'])
  })
})
