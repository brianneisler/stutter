import arrayLikeCastSlice from './arrayLikeCastSlice'

describe('arrayLikeCastSlice', () => {
  test('slices from an array', () => {
    expect(arrayLikeCastSlice([1, 2, 3], 0, 0)).toEqual([])
    expect(arrayLikeCastSlice([1, 2, 3], 0, 1)).toEqual([1])
    expect(arrayLikeCastSlice([1, 2, 3], 0, 2)).toEqual([1, 2])
    expect(arrayLikeCastSlice([1, 2, 3], 0, 3)).toEqual([1, 2, 3])
    expect(arrayLikeCastSlice([1, 2, 3], 1, 1)).toEqual([])
    expect(arrayLikeCastSlice([1, 2, 3], 1, 2)).toEqual([2])
    expect(arrayLikeCastSlice([1, 2, 3], 1, 3)).toEqual([2, 3])
    expect(arrayLikeCastSlice([1, 2, 3], 2, 2)).toEqual([])
    expect(arrayLikeCastSlice([1, 2, 3], 2, 3)).toEqual([3])
    expect(arrayLikeCastSlice([1, 2, 3], 3, 3)).toEqual([])
  })

  test('slices from a string', () => {
    expect(arrayLikeCastSlice('abc', 0, 0)).toEqual('')
    expect(arrayLikeCastSlice('abc', 0, 1)).toEqual('a')
    expect(arrayLikeCastSlice('abc', 0, 2)).toEqual('ab')
    expect(arrayLikeCastSlice('abc', 0, 3)).toEqual('abc')
    expect(arrayLikeCastSlice('abc', 1, 1)).toEqual('')
    expect(arrayLikeCastSlice('abc', 1, 2)).toEqual('b')
    expect(arrayLikeCastSlice('abc', 1, 3)).toEqual('bc')
    expect(arrayLikeCastSlice('abc', 2, 2)).toEqual('')
    expect(arrayLikeCastSlice('abc', 2, 3)).toEqual('c')
    expect(arrayLikeCastSlice('abc', 3, 3)).toEqual('')
  })

  test('preserves original instance if the slice is the entire array', () => {
    const array = [1, 2, 3]
    expect(arrayLikeCastSlice(array, 0, 3)).toBe(array)
    expect(arrayLikeCastSlice(array)).toBe(array)

    const emptyArray = []
    expect(arrayLikeCastSlice(emptyArray, 0, 1)).toBe(emptyArray)
  })
})
