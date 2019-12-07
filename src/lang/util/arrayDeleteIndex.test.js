import arrayDeleteIndex from './arrayDeleteIndex'

describe('arrayDeleteIndex', () => {
  test('deletes an index from an Array', () => {
    const array = [1, 2, 3]
    const result = arrayDeleteIndex(array, 1)
    expect(result).toEqual([1, 3])
    expect(array).toEqual([1, 2, 3])
  })

  test('deleting a non existing index returns same Array', () => {
    const array = [1, 2, 3]
    const result = arrayDeleteIndex(array, 3)
    expect(array).toEqual([1, 2, 3])
    expect(result).toBe(array)
  })
})
