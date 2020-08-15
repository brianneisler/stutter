import arrayRemove from './arrayRemove'

describe('arrayRemove', () => {
  test('removes values using predicate', () => {
    const array = [1, 2, 3]
    const result = arrayRemove(array, (value) => value === 2)
    expect(result).toEqual([1, 3])
    expect(result).not.toBe(array)
    expect(array).toEqual([1, 2, 3])
  })

  test('returns the same Array if no values were removed', () => {
    const array = [1, 2, 3]
    const result = arrayRemove(array, (value) => value === 4)
    expect(result).toEqual([1, 2, 3])
    expect(result).toBe(array)
  })
})
