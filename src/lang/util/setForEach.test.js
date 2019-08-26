import setForEach from './setForEach'

describe('setForEach', () => {
  it('iterates over a Set', () => {
    const iteratee = jest.fn()
    const set = new Set(['a', 'b', 'c'])
    setForEach(set, iteratee)
    expect(iteratee).toHaveBeenNthCalledWith(1, 'a', 'a', set)
    expect(iteratee).toHaveBeenNthCalledWith(2, 'b', 'b', set)
    expect(iteratee).toHaveBeenNthCalledWith(3, 'c', 'c', set)
    expect(iteratee).toHaveBeenCalledTimes(3)
  })
})
