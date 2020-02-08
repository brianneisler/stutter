import mapToArray from './mapToArray'

describe('mapToArray', () => {
  it('converts a Map to an Array', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ])
    const result = mapToArray(map)
    expect(result).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ])
  })
})
