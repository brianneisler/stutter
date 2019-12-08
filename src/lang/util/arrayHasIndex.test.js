import arrayHasIndex from './arrayHasIndex'

describe('arrayHasIndex', () => {
  test('returns true for Array that has index', () => {
    const array = ['a', 'b', 'c']
    expect(arrayHasIndex(array, 0)).toEqual(true)
    expect(arrayHasIndex(array, 1)).toEqual(true)
    expect(arrayHasIndex(array, 2)).toEqual(true)
  })

  test('returns false for Array that does not have index', () => {
    const array = []
    expect(arrayHasIndex(array, 0)).toEqual(false)
  })
})
