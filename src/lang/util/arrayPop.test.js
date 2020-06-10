import arrayPop from './arrayPop'

describe('arrayPop', () => {
  test('pops a value and returns a new Array with the last value removed', () => {
    const array = [1, 2, 3]
    const result = arrayPop(array)
    expect(result).toEqual([1, 2])
    expect(result).not.toBe(array)
  })
})
