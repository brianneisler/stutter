import arrayFrom from './arrayFrom'

describe('arrayFrom', () => {
  test('create an array from another array', () => {
    const array = ['a', 'b', 'c']
    const result = arrayFrom(array)
    expect(result).toEqual(array)
    expect(result).not.toBe(array)
  })
})
