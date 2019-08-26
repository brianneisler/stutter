import setToArray from './setToArray'

describe('setToArray', () => {
  it('converts a Set to an Array', () => {
    const set = new Set(['a', 'b', 'c'])
    const result = setToArray(set)
    expect(result).toEqual(['a', 'b', 'c'])
  })
})
