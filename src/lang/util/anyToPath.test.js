import anyToPath from './anyToPath'

describe('anyToPath', () => {
  test('casts an existing property with dots to a prop', () => {
    expect(anyToPath('a.b', { 'a.b': 'foo' })).toEqual(['a.b'])
  })

  test('casts an existing array key as an element in an array path', () => {
    const arrayKey = ['foo']
    const map = new Map([[arrayKey, {}]])
    expect(anyToPath(arrayKey, map)).toEqual([arrayKey])
  })

  test('preserves an array as an array', () => {
    expect(anyToPath(['a', 'b'])).toEqual(['a', 'b'])
  })
})
