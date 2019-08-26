import arrayMap from './arrayMap'

describe('arrayMap', () => {
  test('map over array', () => {
    const iteratee = jest.fn()
    const array = ['a', 'b']
    arrayMap(array, iteratee)
    expect(iteratee).toHaveBeenNthCalledWith(1, 'a', 0, array)
    expect(iteratee).toHaveBeenNthCalledWith(2, 'b', 1, array)
  })
})
