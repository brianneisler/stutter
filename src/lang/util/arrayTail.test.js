import arrayTail from './arrayTail'

describe('arrayTail', () => {
  test('slices 1 + length from an array', () => {
    expect(arrayTail(['a', 'b', 'c', 'd', 'e'])).toEqual(['b', 'c', 'd', 'e'])
  })

  test('returns empty array for array of length 1', () => {
    expect(arrayTail(['a'])).toEqual([])
  })

  test('returns empty array for empty array', () => {
    expect(arrayTail([])).toEqual([])
  })
})
