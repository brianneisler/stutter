import mapDeleteKey from './mapDeleteKey'

describe('mapDeleteKey', () => {
  it('deletes a Key from a Map and returns the Map', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = mapDeleteKey(map, 'a')
    expect(result).toBe(map)
    expect(result).toEqual(new Map([['b', 2], ['c', 3]]))
  })
})
