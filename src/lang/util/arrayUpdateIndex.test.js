import arrayUpdateIndex from './arrayUpdateIndex'

describe('arrayUpdateIndex', () => {
  test('updates an Index in an Array where the index exists', () => {
    const array = [1, 2, 3]
    const func = jest.fn(() => 'foo')
    const result = arrayUpdateIndex(array, 1, func)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func).toHaveBeenCalledWith(2)
    expect(result).toEqual([1, 'foo', 3])
    expect(array).toEqual([1, 2, 3])
  })

  test('updates a non existing Index in an Array', () => {
    const array = [1, 2, 3]
    const func = jest.fn(() => 'foo')
    const result = arrayUpdateIndex(array, 3, func)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func).toHaveBeenCalledWith(undefined)
    expect(result).toEqual([1, 2, 3, 'foo'])
    expect(array).toEqual([1, 2, 3])
  })

  test('updates a non existing Index in an Array with undefined', () => {
    const array = [1, 2, 3]
    const result = arrayUpdateIndex(array, 4, () => undefined)
    expect(result).toEqual([1, 2, 3, undefined, undefined])
    expect(result.length).toEqual(5)
    expect(array).toEqual([1, 2, 3])
    expect(array.length).toEqual(3)
  })
})
