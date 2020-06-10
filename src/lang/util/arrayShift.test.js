import arrayShift from './arrayShift'

describe('arrayShift', () => {
  test('shifts a value and returns a new Array with the first value removed from the front of the Array', () => {
    const array = [1, 2, 3]
    const result = arrayShift(array)
    expect(result).toEqual([2, 3])
    expect(result).not.toBe(array)
  })
})
