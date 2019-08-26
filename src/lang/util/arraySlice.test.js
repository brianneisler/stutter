import arraySlice from './arraySlice'

describe('arraySlice', () => {
  test('slices from an array', () => {
    expect(arraySlice(['a', 'b', 'c', 'd', 'e'], 1, 3)).toEqual(['b', 'c'])
  })
})
