import arrayUnshift from './arrayUnshift'

describe('arrayUnshift', () => {
  test('unshifts a value and returns a new Array with the value added tp the front of the Array', () => {
    const array = [1, 2, 3]
    const result = arrayUnshift(array, 0)
    expect(result).toEqual([0, 1, 2, 3])
    expect(result).not.toBe(array)
  })
})
