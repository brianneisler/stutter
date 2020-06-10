import arrayPush from './arrayPush'

describe('arrayPush', () => {
  test('pushes a value and returns a new array with the value added to the back of the Array', () => {
    const array = [1, 2, 3]
    const result = arrayPush(array, 4)
    expect(result).toEqual([1, 2, 3, 4])
    expect(result).not.toBe(array)
  })
})
