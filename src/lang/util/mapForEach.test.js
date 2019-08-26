import mapForEach from './mapForEach'

describe('mapForEach', () => {
  it('iterates over a Map', () => {
    const iteratee = jest.fn()
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    mapForEach(map, iteratee)
    expect(iteratee).toHaveBeenNthCalledWith(1, 1, 'a', map)
    expect(iteratee).toHaveBeenNthCalledWith(2, 2, 'b', map)
    expect(iteratee).toHaveBeenNthCalledWith(3, 3, 'c', map)
    expect(iteratee).toHaveBeenCalledTimes(3)
  })
})
