import arrayReduce from './arrayReduce'

describe('arrayReduce', () => {
  test('reduce over array with no initial value', () => {
    const array = [1, 2, 3, 4]
    const result = arrayReduce(array, (x, y) => x + y)
    expect(result).toBe(10)
  })

  test('reduce over array with initial value set', () => {
    const array = [1, 2, 3, 4]
    const result = arrayReduce(array, (x, y) => x + y, 10)
    expect(result).toBe(20)
  })
})
